class MapDrawerController < ApplicationController

  layout  'drawer'

  def index
      @id = params[:id]
  end

  def map
    (render :text => '/home' if params[:id].nil?) and return
    @map = Map.find_by(:id => params[:id])
    @data = @map.data.read
    send_data @data
  end
end
