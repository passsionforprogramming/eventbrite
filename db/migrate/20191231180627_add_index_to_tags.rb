class AddIndexToTags < ActiveRecord::Migration[5.2]
  def change
    add_index :tags, :event_id
  end
end
