class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
    add_index :tags, :event_id
    add_index :tags, :name
  end
end
