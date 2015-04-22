class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ActionController::ImplicitRender
  include CanCan::ControllerAdditions

  before_filter :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up).push(:first_name, :last_name)
    devise_parameter_sanitizer.for(:account_update).push(:first_name, :last_name)
  end

  rescue_from CanCan::AccessDenied do
    head :unauthorized
  end

  rescue_from ActiveRecord::RecordNotFound do |e|
    render json: { errors: [{ attribute: '', message: e.message}], total: 1 }, status: 400
  end
end
