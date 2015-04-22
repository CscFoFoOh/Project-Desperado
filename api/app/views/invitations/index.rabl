collection @invitations, root: :data, object_root: false
attributes :id, :user_id, :invited_at, :accepted_at

node(:user_name) do |i|
  i.user.full_name
end