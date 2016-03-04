class MainMenuController < ActionController::Base
  layout nil

  def new_map
    @map = Map.new
    @map.title = '新建地图文件'
    @map.extname = '.kml'
    @map.center = [0, 0]
    @map.extent = [0, 0, 100, 100]
    @map.size = 0
    @map.save
    redirect_to root_url
  end

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

  def load_text_file
    file = params[:file]
    data = file.read
    lines = data.split("\r\n")
    features = []
    lines.each do |line|
      features << line.split(',')
    end
    render :json => {:data => features}
  end

  def export_file
    #todo
  end

  def auto_save
    #todo
  end

end