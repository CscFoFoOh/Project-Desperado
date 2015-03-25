class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.references :project, index: true
      t.references :user, index: true
      t.datetime :applied_at?
      t.datetime :invited_at?
      t.datetime :accepted_at?
      t.datetime :owner_at

      t.timestamps null: false
    end
    add_foreign_key :memberships, :projects
    add_foreign_key :memberships, :users
  end
end
