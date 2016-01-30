class HomeController < ApplicationController
  layout 'home'

  def home
    @maps = Map.all
  end

  def files
    @maps = Map.all
    render :json => {:msg => 'ok', :files => @maps.as_json}
  end
end
