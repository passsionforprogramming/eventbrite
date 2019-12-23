class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.string :category
      t.string :type
      t.string :organizer
      t.timestamp :start_time
      t.timestamp :end_time
      t.boolean :display_start_time
      t.boolean :display_end_time
      t.string :timezone
      t.string :image_url
      t.text :description
      t.boolean :published
      t.string :status
      t.float :sold
      t.float :gross
      t.integer :views

      t.timestamps
    end
    add_index :events, :user_id
    add_index :events, :start_time
    add_index :events, :end_time
  end
end
