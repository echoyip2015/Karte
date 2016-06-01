class MainMenuController < ActionController::Base
  layout nil

  TMP_PATH = '/Users/zhuzhiying/Karte/testdata/output/'

  def new_map
    @map = Map.new
    @map.title = '新建地图文件'
    @map.extname = '.json'
    @map.center = [0, 0]
    @map.extent = [0, 0, 100, 100]
    @map.meta = {:center => @map.center, :extent => @map.extent, :proj => 'EPSG:3857'}
    @map.size = 0
    @map.save
    @map.reload
    redirect_to "/file/#{@map.id}"
  end

  def delete_map
    @map = Map.find_by(:id => params[:id])
    @map.destroy unless @map.blank?
    render :json => {:msg => 'ok'}
  end

  def recent_files
    @maps = Map.order(:modify_time.desc).limit(5)
    render :json => {:msg => 'ok', :maps => @maps}
  end

  def rename_file
    @map = Map.find_by(:id => params[:id])
    @map.title = params[:title]
    @map.modify_time = DateTime.current
    @map.save
    render :json => {:msg => 'ok'}
  end

  def map_meta
    @map = Map.find_by(:id => params[:id])
    @map.meta = {:center => @map.center, :extent => @map.extent, :proj => 'EPSG:3857'} if @map.meta.blank?
    @map.save
    render :json => {:msg => 'ok', :file => @map}
  end

  def import_file
    begin
      @map = Map.new
      transfer = MapLoader.new(params[:file].tempfile.path)
      filename = params[:file].original_filename
      @map.title = filename[0,filename.rindex('.')]
      @map.extname = transfer.extname
      @map.center = transfer.center
      @map.extent = transfer.extent
      @map.meta = {:center => @map.center, :extent => @map.extent, :proj => transfer.proj}
      Rails.logger.info(@map.meta.inspect)
      @map.data = transfer.json_data
      @map.size = transfer.data.stat.size
      @map.save
      @map.reload
      render :json => {:msg => 'ok', :map => @map}
    rescue Exception => e
      render :json => {:msg => 'failed', :info => '文件格式不支持'}
    end
  end

  def load_text_file
    file = params[:file]
    data = file.read
    lines = data.split("\r\n")
    features = []
    lines.each do |line|
      feature = line.split(',')
      features << feature
      if feature.length != 5
          render :json => {:msg => 'failed' , :feature => feature} and return
      end
    end
    render :json => {:data => features}
  end

  def export_file
    @map = Map.find_by(:id => params[:id])
    export_status = @map.export(params[:type])
    if export_status.blank?
      render :json => {:msg => 'failed'} and return
    else
      fid = SecureRandom.hex(16)
      if params[:type] == 'shp'
        session[:fid] = "#{TMP_PATH}#{@map.title}.tar"
        Rails.logger.info("t1:#{session[:fid]}")
      else
        session[:fid] = "#{TMP_PATH}#{@map.title}.#{params[:type]}"
        Rails.logger.info("t2:#{session[:fid]}")
      end
      render :json => {:msg => 'success', :url => "/download/#{fid}"}
    end
  end

  def download
    Rails.logger.info(session.to_hash)
    path = session[:fid]
    #reset_session
    send_file path
  end

  def auto_save
    begin
      tmp_file = File.open(Rails.root.join('tmp/uploads', 'auto_save.json'), 'w')
      tmp_file.write(params[:json_data])
      tmp_file.fsync
      tmp_file.close
      transfer = MapLoader.new(tmp_file.path)
      @map = Map.find_by(:id => params[:id])
      @map.extname = transfer.extname
      @map.center = transfer.center
      @map.extent = transfer.extent
      @map.meta = {:center => @map.center, :extent => @map.extent, :proj => @map.meta[:proj] }
      Rails.logger.info(@map.meta.inspect)
      @map.data = transfer.json_data
      @map.size = transfer.data.stat.size
      @map.save

    end
    render :json => {:msg => 'success'}
  end

end