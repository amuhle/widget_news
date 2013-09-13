class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_and_belongs_to_many :roles
  before_save :setup_role

  def role?(role)
    return !!self.roles.find_by_name(role.to_s.camelize)
  end

  # Default role is "User"
  def setup_role
    if self.role_ids.empty?
      self.role_ids = Role.find_by_name('user').id
    end
  end

end
