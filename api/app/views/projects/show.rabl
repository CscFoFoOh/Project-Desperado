object @project => :data
attributes :id, :name, :description, :created_at, :updated_at
node(:owner_id) { @project.owner.id }
node(:memberships) { @project.memberships.map(&:user_id) }