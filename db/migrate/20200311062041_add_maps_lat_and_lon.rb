class AddMapsLatAndLon < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :maps_lat, :float
    add_column :events, :maps_lon, :float
  end
end
