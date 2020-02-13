class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.string :ticket_code, null: false
      t.string :name, null: false
      t.integer :owner_id
      t.integer :event_id
      t.boolean :donation, default: false
      t.text :description
      t.string :type
      t.float :price
      t.integer :batch_id

      t.timestamps
    end
    add_index :tickets, :owner_id
    add_index :tickets, :event_id
    add_index :tickets, :batch_id

  end
end
