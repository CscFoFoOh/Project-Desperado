class MeController < ApplicationController
  before_action :authenticate_user!

  def projects
    @projects = current_user.projects

    render 'projects/index'
  end
end
