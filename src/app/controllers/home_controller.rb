class HomeController < ApplicationController
  layout 'home'

  skip_before_filter :check_login, :only => :login

  def home
    @maps = Map.all
  end

  def login
    if params[:password] and '098f6bcd4621d373cade4e832627b4f6' == Digest::MD5.hexdigest(params[:password]) and params[:user] == 'admin'
      session[:user] = 'admin'
      session[:login] = true
    else
      flash[:notice] = '账号错误!'
    end
    redirect_to '/'
  end

  def logout
    reset_session
    redirect_to '/'
  end

  def files
    @maps = Map.all
    render :json => {:msg => 'ok', :files => @maps.as_json}
  end
end
