class CreateBatches < ActiveRecord::Migration[5.2]
  def change
    create_table :batches do |t|
      t.datetime :sale_start_time
      t.datetime :sale_end_time
      t.string :visbility
      t.boolean :absorb_fees, default: false
      t.integer :quantity
      t.float :price
      t.integer :min_num_tickets_sold
      t.integer :max_num_tickets_sold
      t.string :sales_channel

      t.timestamps
    end
  end
end
