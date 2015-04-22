class InvitationsController < ApplicationController
  before_action :set_project

  def index
    @invitations = @project.invitations.joins(:user)
  end

  def create
    @user = User.find_by email: params[:email]
    @invitation = @project.invitations.build(user_id: @user.id, invited_at: Time.now)

    if @invitation.save
      render 'invitations/create', status: 201
    else
      render 'invitations/error', status: 422
    end
  end

  private

  def set_project
    @project = Project.find params[:project_id]
  end

end