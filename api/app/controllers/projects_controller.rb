class ProjectsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_project, only: [:show, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.where(closed_at: nil, ended_at: nil)

    if params[:userid]
      @projects = @projects.joins(:memberships).where(memberships: { user_id: params[:userid].to_i })
    end
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.create project_params
    current_user.memberships.create(
        project_id: @project.id,
        owner_at: Time.now
    )

    if @project.save
      render 'projects/create', status: 201
    else
      render 'projects/error', status: 422
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    authorize! :update, @project

    if @project.update(project_params)
      head :no_content
    else
      render 'projects/error', status: 422
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    authorize! :destroy, @project
    @project.destroy

    head :no_content
  end

  private

    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.permit(:name, :description)
    end
end
