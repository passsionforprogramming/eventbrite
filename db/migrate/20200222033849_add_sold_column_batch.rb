class AddSoldColumnBatch < ActiveRecord::Migration[5.2]
  def change
    change_table :batches do |t|
      t.column :type, :string
    end
  end
end
