class ChangeEvents < ActiveRecord::Migration[5.2]
  def change
    change_table(:events) do |t|
      t.column :location_address, :string, null: false
      t.column :location_type, :string
      t.float :lat
      t.float :lon
      t.string :venue
    end
    add_index :events, :lat
    add_index :events, :lon
  end
end
