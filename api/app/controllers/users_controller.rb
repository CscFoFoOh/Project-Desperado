class UsersController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource

  def index
    @users = @users.where.not(id: current_user.id)
  end

  def show
  end

  def create
    @user.assign_attributes user_params
    @user.skip_confirmation!

    if @user.save
      render 'users/create', status: 201
    else
      render 'users/error', status: 422
    end
  end

  def update
    if @user.update user_params
      head :no_content
    else
      render 'users/error', status: 422
    end
  end

  def destroy
    @user.destroy

    head :no_content
  end

  private

    def user_params
      params.permit(:email, :password, :password_confirmation, :first_name, :last_name, :provider)
    end
end
