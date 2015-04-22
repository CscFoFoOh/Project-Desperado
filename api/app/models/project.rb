class Project < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_many :memberships, dependent: :destroy
  has_many :users, through: :memberships

  def invitations
    memberships.invitations
  end

  def applications
    memberships.applications
  end

  def owner
    memberships.where.not(owner_at: nil).first.user
  end
end
