class Users::RegistrationsController < Devise::RegistrationsController
  #before_filter :check_permissions, :only => [:new, :create, :cancel]
  skip_before_filter :require_no_authentication
  before_filter :configure_permitted_parameters, if: :devise_controller?

  def check_permissions
    authorize! :create, resource
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:name, :email, :password, :password_confirmation, role_ids: [])}
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:name, :email, :password, :password_confirmation, :current_password, role_ids: [])}
  end
end
