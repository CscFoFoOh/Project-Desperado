object false
node(:id) { @invitation.id }
node(:invited_at) { @invitation.invited_at }
child(@user => :user) do
  attributes :id, :first_name, :last_name, :provider, :email, :is_admin
end