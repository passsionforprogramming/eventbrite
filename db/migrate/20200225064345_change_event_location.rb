class ChangeEventLocation < ActiveRecord::Migration[5.2]
  def change
    change_table(:events) do |t|
      t.remove :lat
      t.remove :lon
      t.column :lat_lon, :st_point, geographic: true
    end
  end
end
