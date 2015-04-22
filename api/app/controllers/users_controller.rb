class UsersController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  load_and_authorize_resource except: :show
  skip_authorize_resource only: :index

  def index
    @users = User.all
    @users = @users.where.not(id: current_user.id) if user_signed_in?
  end

  def show
    @user = User.find_by slug: params[:id]
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
