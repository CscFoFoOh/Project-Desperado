# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'project_desperado'
set :repo_url, 'git@github.com:CscFoFoOh/Project-Desperado.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

set :deploy_to, '/home/app/apps/project_desperado'
set :scm, :git
set :format, :pretty
set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
set :linked_files, fetch(:linked_files, []).push('api/.rbenv-vars')

# Default value for linked_dirs is []
set :linked_dirs, fetch(:linked_dirs, []).push('api/vendor/bundle', 'log', 'api/tmp', 'api/log', 'frontend/.tmp', 'frontend/bower_components', 'frontend/node_modules')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

set :keep_releases, 5

namespace :deploy do

  after :finishing, :updated do
    on roles(:all) do
      bin_dir = release_path.join('api', 'bin')
      api_dir = release_path.join('api')
      frontend_dir = release_path.join('frontend')

      with path: bin_dir + ':$PATH' do

        within api_dir do
          execute :rake, 'db:create'
          execute :rake, 'db:migrate'
          execute :thin,  "-C thin_config.yml restart"
        end

        within frontend_dir do
          execute :npm, 'install'
          execute :bower, 'install'
          execute :grunt, 'build'
        end

      end
    end
  end

end
