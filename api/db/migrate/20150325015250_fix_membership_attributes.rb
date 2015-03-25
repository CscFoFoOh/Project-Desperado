class FixMembershipAttributes < ActiveRecord::Migration
  def self.up
    rename_column :memberships, :applied_at?, :applied_at
    rename_column :memberships, :invited_at?, :invited_at
    rename_column :memberships, :accepted_at?, :accepted_at
  end

  def self.down
    # rename back if you need or do something else or do nothing
  end
end
