Rails.application.routes.draw do

  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    get '/me/projects', to: 'me#projects'
    resources :memberships, except: [:new, :edit]    
	  resources :comments, except: [:new, :edit]
    resources :projects, except: [:new, :edit]
  end

end
