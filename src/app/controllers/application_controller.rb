class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  before_filter :check_login

  def check_login
    if !session[:user].blank? and session[:login] == true
      return true
    end
    render :template => 'home/login' , :layout => nil and return
  end
end
