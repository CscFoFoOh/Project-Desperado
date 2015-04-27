# https://github.com/lynndylanhurley/devise_token_auth/blob/master/test/controllers/demo_user_controller_test.rb
RSpec.shared_context 'logged_in_user' do

  before do
    @user = FactoryGirl.create(:confirmed_user)
    @user.is_admin = true 

    @auth_headers = @user.create_new_auth_token

    @token     = @auth_headers['access-token']
    @client_id = @auth_headers['client']
    @expiry    = @auth_headers['expiry']
  end

end