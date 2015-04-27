class User < ActiveRecord::Base
  before_create :create_slug
  before_destroy :remove_created_projects
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable
  include DeviseTokenAuth::Concerns::User

  has_many :memberships, dependent: :destroy
  has_many :projects, through: :memberships
  has_many :comments

  def admin?
    is_admin
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def create_slug(count = 1)
    sha256 = Digest::SHA2.new
    sha256 << "#{first_name}#{last_name}#{email}#{count}"
    slug = sha256.hexdigest

    if User.find_by slug: slug
      create_slug(count + 1)
    else
      self.slug = slug
    end
  end

  protected

  def generate_url(url, params = {})
    uri = URI(url)

    res = "#{uri.scheme}://#{uri.host}"
    res += ":#{uri.port}" if (uri.port and uri.port != 80 and uri.port != 443)
    res += "#{uri.path}" if uri.path
    res += "#{uri.fragment}" if uri.fragment
    res += "?#{params.to_query}"

    return res
  end

  def remove_created_projects
    projects.each do |project|
      project.destroy if project.owner == self
    end
  end
end
