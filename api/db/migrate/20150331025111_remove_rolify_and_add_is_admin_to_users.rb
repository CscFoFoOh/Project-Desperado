class RemoveRolifyAndAddIsAdminToUsers < ActiveRecord::Migration
  def change
    drop_table :roles
    drop_table :users_roles
    add_column :users, :is_admin, :boolean, default: false
  end
end
