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
      @data = {:type => 'FeatureCollection', :features => []}.to_json
    else
      @data = @map.data.read
    end
    @data = ActiveSupport::JSON.decode(@data)
    @data.delete('crs')
    @data.delete('srs')
    render :json => @data
  end
end
