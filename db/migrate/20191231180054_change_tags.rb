class ChangeTags < ActiveRecord::Migration[5.2]
  def change
    remove_column :tags, :event_id
    add_column :tags, :event_id, :integer
  end
end
