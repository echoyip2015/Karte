class MapDrawerController < ApplicationController

  layout  'drawer'

  def index
    (render :text => '/home' if params[:id].nil?) and return
    @id = params[:id]
    @map = Map.find_by(:id => params[:id])
  end

  def map
    (render :text => '/home' if params[:id].nil?) and return
    @map = Map.find_by(:id => params[:id])
    if @map.data.blank?
      @data = {}
    else
      @data = @map.data.read
    end
    send_data @data
  end
end
