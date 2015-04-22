class ProjectsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_project, only: [:show, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.where(closed_at: nil, ended_at: nil)
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
    if @project.update(project_params)
      head :no_content
    else
      render 'projects/error', status: 422
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy

    head :no_content
  end

  def users
    @users = User.joins(:memberships).where.not(id: current_user.id, memberships: { accepted_at: nil, owner_at: nil })

    render 'users/index', status: 200
  end

  private

    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.permit(:name, :description)
    end
end
