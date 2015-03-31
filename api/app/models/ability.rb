class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    
    alias_action :create, :read, :update, :destroy, :to => :crud
    alias_action :index, :show, :new, :destroy, :to => :isnd
    
    # Allow a user to edit their own profile
    can [:edit, :update], User, id: user.id
    
    # Admins can do everything
    can :manage, :all if user.admin?

    # # This is for testing
    # # We need to set access control for the right user
    # can :crud, [Access, Airport, Attachment, BillCode, Client, ClosingForm, Customer, Equipment, 
    #   Expense, Group, Job, JobType, Note, Part, PayCode, Report, Site, Skill, State, Tool] unless user.id.nil?
  end
end
