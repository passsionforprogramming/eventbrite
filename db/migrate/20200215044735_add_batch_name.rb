class AddBatchName < ActiveRecord::Migration[5.2]
  def change
    add_column :batches, :name, :string
    add_column :batches, :description, :text
    add_column :batches, :tickets_sold, :integer
    add_column :batches, :event_id, :integer
    add_index :batches, :event_id
  end
end
