class Membership < ActiveRecord::Base
  scope :invitations, -> { where type: 'Invitation' }
  scope :applications, -> { where type: 'Application' }

  validates_presence_of :project
  validates_presence_of :user

  belongs_to :project
  belongs_to :user
end
