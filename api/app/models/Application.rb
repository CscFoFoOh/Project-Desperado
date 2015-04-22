class Application < Membership
  before_create :set_applied_at

  private

  def set_invited_at
    self.applied_at = Time.now
  end
end