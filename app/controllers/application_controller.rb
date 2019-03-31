class ApplicationController < ActionController::Base
	include SessionsHelper
	
	 add_flash_types :danger, :info, :success, :warning

  private
    def require_logged_in_user
      unless user_signed_in?
       format.html { redirect_to login_url danger:'You dont have access, please Login' }      
      end
    end

end
