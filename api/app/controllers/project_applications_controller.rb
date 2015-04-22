class ProjectApplicationsController < ApplicationController
  before_action :set_project

  def create
    @user = User.find params[:user_id]
    @application = @project.applications.build(user_id: @user.id, applied_at: Time.now)

    if @application.save
      render 'applications/create', status: 201
    else
      render 'applications/error', status: 422
    end
  end

  private

  def set_project
    @project = Project.find params[:project_id]
  end

end