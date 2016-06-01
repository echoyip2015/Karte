#-*- coding: utf-8 -*-
require 'gdal-ruby/ogr'
require 'json'

class MapLoader

  class UnSupportedFile < Exception
  end

  SUPPORTED_TYPE = {
      :shp => 'ESRI Shapefile',
      :dxf => 'DXF',
      :json => 'GeoJSON',
      :kml => 'KML',
  }

  TMP_PATH = '/Users/zhuzhiying/Karte/testdata/output/'

  def initialize(source)
    @source = source
    @driver = Gdal::Ogr.get_driver_by_name(auto_detect_type)
    begin
      @data = @driver.open(@source)
    rescue Exception => e
      puts 'file load failed!' + e.message
    end
    SUPPORTED_TYPE.each do |key, value|
      MapLoader.send(:define_method, "to_#{key}") do
        sync_trans(key, value)
      end
    end
  end

  def title
    File.basename(@source, self.extname)
  end

  def extname
    File.extname(@source)
  end

  def proj
    layer_count = @data.get_layer_count
    begin
      spatial_ref = @data.get_layer(0).get_spatial_ref().export_to_proj4()
    rescue Exception => e
      'unknown'
    end
  end

  def data
    File.open(@source)
  end

  def center
    layer = @data.get_layer(0)
    extent = layer.get_extent(1)
    [(extent[1] + extent[0]) / 2, (extent[2] + extent[3]) / 2]
  end

  def extent
    layer = @data.get_layer(0)
    extent = layer.get_extent(1)
    [extent[0], extent[2], extent[1], extent[3]]
  end

  def json_data
    path = self.to_json
    File.open(path, File::SYNC)
  end

  def valid?
    !@data.nil?
  end

  def sync_trans(key, value)
    if @data.blank?
      return false
    end
    tmp_path = TMP_PATH + self.title + ".#{key}"
    puts 'trans start'
    fork do
      system("rm -r #{TMP_PATH}/*")
      if key == :shp
        tmp_dir = "#{TMP_PATH}#{self.title}_shp"
        system("mkdir #{tmp_dir}")
        system("ogr2ogr -f '#{SUPPORTED_TYPE[key]}' #{tmp_dir} #{@source} -skipfailures -overwrite")

        system("tar -C #{TMP_PATH} -cf #{TMP_PATH}#{self.title}.tar #{self.title}_shp")
        puts "tar -C #{TMP_PATH} -cf #{TMP_PATH}#{self.title}.tar #{self.title}_shp"
      else
        system("ogr2ogr -f '#{SUPPORTED_TYPE[key]}' #{tmp_path} #{@source} -skipfailures -overwrite")
      end
    end

    pid = Process.wait
    puts "transport process terminated, pid = #{pid}, status = #{$?.exitstatus}"
    puts 'trans end'
    if key == :shp
      tmp_path = "#{TMP_PATH}#{self.title}.tar"
    end
    if File.exist?(tmp_path)
      return tmp_path
    end
    return false
  end


  def auto_detect_type
    raise UnSupportedFile.new('not supported') unless File.exist?(@source)
    extname = File.extname(@source)[1..-1]
    raise UnSupportedFile.new('not supported') unless SUPPORTED_TYPE.include?(extname.intern)
    SUPPORTED_TYPE[extname.intern]
  end


  def self.driver_count
    Gdal::Ogr.get_driver_count
  end
end
