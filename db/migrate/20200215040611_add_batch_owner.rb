class AddBatchOwner < ActiveRecord::Migration[5.2]
  def change
    add_column :batches, :owner_id, :integer
    add_index :batches, :owner_id
  end
end
