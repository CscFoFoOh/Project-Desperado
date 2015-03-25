class Membership < ActiveRecord::Base
  validates_presence_of :project
  validates_presence_of :user

  belongs_to :project
  belongs_to :user
end
