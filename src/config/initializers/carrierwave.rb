CarrierWave.configure do |config|
  config.storage = :grid_fs
  config.root = Rails.root.join('tmp')
  config.grid_fs_access_url = "/uploads/map"
end