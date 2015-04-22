class Invitation < Membership
  before_create :set_invited_at

  private

  def set_invited_at
    self.invited_at = Time.now
  end
end