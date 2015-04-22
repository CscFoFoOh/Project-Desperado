class ProjectUsersController < ApplicationController
  before_action :set_project, except: :destroy

  def index
    authorize! :read, @project

    @users = User.joins(:memberships).where(memberships: { project_id: @project.id })

    render 'users/index', status: 200
  end

  def create
    authorize! :update, @project

    @user = User.find_by email: params[:email]
    @invitation = @project.invitations.build(user_id: @user.id, invited_at: Time.now, accepted_at: Time.now)

    if @invitation.save
      render 'invitations/create', status: 201
    else
      render 'invitations/error', status: 422
    end
  end

  def destroy
    authorize! :destroy, @project
    Membership.destroy_all project_id: params[:project_id], user_id: params[:id]

    head :no_content
  end

  private

  def set_project
    @project = Project.find params[:project_id]
  end

end