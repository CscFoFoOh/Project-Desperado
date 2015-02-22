class CleanUpUserModel < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string

    remove_column :users, :name
    remove_column :users, :nickname
  end
end
