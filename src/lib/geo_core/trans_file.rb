#-*- coding: utf-8 -*-
require 'gdal-ruby/ogr'

class TransFile

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
      TransFile.send(:define_method, "to_#{key}") do
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

  def data
    File.open(@source)
  end

  def json_data
    path = self.to_json
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
