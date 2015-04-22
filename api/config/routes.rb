Rails.application.routes.draw do

  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    get '/me/projects', to: 'me#projects'
    resources :users, except: [:new, :edit]
    resources :projects, except: [:new, :edit] do
      get '/users', to: 'projects#users'
      resources :invitations, only: [:index, :create]
    end
  end

end
