class SessionsController < ApplicationController

  def new
    redirect_to index_path(current_user) if user_signed_in?
  end

  def create
    user = User.find_by(username: params[:session][:username])
    if user && user.password
      sign_in(user)
      redirect_to index_path(current_user)
    else
       format.html {redirect_to login_path,  danger: " Username or password invalid" }

    end
  end

  def destroy
    sign_out
    flash[:info] = 'Bye bye'
    redirect_to login_path
  end
end
