object false
node(:id) { @application.id }
node(:applied_at) { @application.applied_at }
child(@user => :user) do
  attributes :id, :first_name, :last_name, :provider, :email, :is_admin
end