class MainMenuController < ActionController::Base
  layout nil

  def import_file
    @map = Map.new
    transfer = MapLoader.new(params[:file].tempfile.path)
    @map.title = params[:file].original_filename
    @map.extname = transfer.extname
    @map.center = transfer.center
    @map.extent = transfer.extent
    @map.data = transfer.kml_data
    @map.size = transfer.data.stat.size
    @map.save
    #todo
    redirect_to root_url
  end

  def export_file
    #todo
  end

  def auto_save
    #todo
  end

end