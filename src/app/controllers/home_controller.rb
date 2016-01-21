class HomeController < ApplicationController
  layout 'home'

  def home
    @maps = Map.all
  end
end
