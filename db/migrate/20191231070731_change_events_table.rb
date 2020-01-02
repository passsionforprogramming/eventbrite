class ChangeEventsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :type
    add_column :events, :eventType, :string
  end
end
