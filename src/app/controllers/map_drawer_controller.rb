class MapDrawerController < ApplicationController

  layout  'drawer'

  def index
    @id = params[:id]
  end

  def map
    @map = Map.find_by(:id => params[:id])
    @data = @map.data.read
    send_data @data
  end
end
