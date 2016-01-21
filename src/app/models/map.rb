class Map
  include Mongoid::Document

  store_in collection: 'maps', database: 'karte'

  field :title, type: String

  field :extname, type: String

  mount_uploader :data, MapUploader

  field :create_time, type: DateTime, default: -> { DateTime.now }

  field :modify_time, type: DateTime, default: -> { DateTime.now }

  def self.import(file_path)
    transfer = TransFile.new(file_path)
    instance = self.new
    return false unless transfer.valid?
    instance.attributes = build_attribute(transfer)
    instance.save!
  end

  def export(file_type)
    tmp_path = Rails.root.to_s + "/tmp/maps/#{self.title}.json"
    tmp_file = File.new(tmp_path, 'w+')
    tmp_file.binmode
    tmp_file.write(self.json_data.read)
    tmp_file.fsync
    tmp_file.close
    transfer = TransFile.new(tmp_path)
    transfer.send("to_#{file_type}")
  end

  private

  def self.build_attribute(transfer)
    {
        title: transfer.title,
        extname: transfer.extname,
        json_data: transfer.json_data
    }
  end

end