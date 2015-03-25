Rails.application.routes.draw do

  resources :memberships, except: [:new, :edit]
  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    resources :comments, except: [:new, :edit]
    resources :projects, except: [:new, :edit]
  end

end
