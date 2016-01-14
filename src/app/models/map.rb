class Map
  include Mongoid::Document

  store_in collection: 'maps', database: 'karte'

  field :title, type: String

  field :extname, type: String

  mount_uploader :data, MapUploader

  mount_uploader :json_data, MapUploader

  field :create_time, type: DateTime, default: -> { DateTime.now }

  field :modify_time, type: DateTime, default: -> { DateTime.now }

  def self.import(file_path)
    transfer = TransFile.new(file_path)
    instance = self.new
    return false unless transfer.valid?
    instance.attributes = build_attribute(transfer)
    instance.save!
  end

  private

  def self.build_attribute(transfer)
    {
        title: transfer.title,
        extname: transfer.extname,
        data: transfer.data,
        json_data: transfer.json_data
    }
  end

end