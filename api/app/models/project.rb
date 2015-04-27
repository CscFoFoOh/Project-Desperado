class Project < ActiveRecord::Base
  belongs_to :user
  has_many :memberships, dependent: :destroy
  has_many :users, through: :memberships

  validates_presence_of :name
  validates_presence_of :description


  def invitations
    memberships.invitations
  end

  def applications
    memberships.applications
  end

  def owner
    memberships.where.not(owner_at: nil).first.user unless memberships.where.not(owner_at: nil).first == nil 
  end
end
