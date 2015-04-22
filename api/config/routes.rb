Rails.application.routes.draw do

  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    get '/me/projects', to: 'me#projects'
    resources :users, except: [:new, :edit]
    resources :projects, except: [:new, :edit] do
      resources :users, controller: :project_users, only: [:index, :create, :destroy]
    end
  end

end
