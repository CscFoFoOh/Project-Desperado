class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
  end

  def show
  end

  def create
    @user = User.create user_params

    if @user.save
      render 'users/create', status: 201
    else
      render 'users/error', status: 422
    end
  end

  def update
    if @user.update(user_params)
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

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.permit(:email, :password, :password_confirmation, :first_name, :last_name, :provider)
    end
end
