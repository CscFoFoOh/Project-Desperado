object false
node(:id) { @invitation.id }
node(:user_id) { @invitation.user_id }
node(:invited_at) { @invitation.invited_at }
node(:user_name) do
  @invitation.user.full_name
end