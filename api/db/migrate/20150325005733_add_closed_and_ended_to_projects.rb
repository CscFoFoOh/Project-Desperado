class AddClosedAndEndedToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :closed_at, :datetime
    add_column :projects, :ended_at, :datetime
  end
end
