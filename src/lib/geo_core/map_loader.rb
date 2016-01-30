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
    @data = @driver.open(@source)

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
    layer = @data.get_layer(0)
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

  def kml_data
    path = self.to_kml
    File.open(path, File::SYNC)
  end

  def valid?
    !@data.nil?
  end

  def sync_trans(key, value)
    tmp_path = TMP_PATH + self.title + ".#{key}"
    fork do
      driver = Gdal::Ogr.get_driver_by_name(value)
      File.delete(tmp_path) if File.exist?(tmp_path)
      driver.copy_data_source(@data, tmp_path)
    end
    pid = Process.wait
    puts "transport process terminated, pid = #{pid}, status = #{$?.exitstatus}"
    tmp_path
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
