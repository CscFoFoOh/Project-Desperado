Rails.application.routes.draw do

  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    resources :memberships, except: [:new, :edit]    
	  resources :comments, except: [:new, :edit]
    resources :projects, except: [:new, :edit]
  end

end
