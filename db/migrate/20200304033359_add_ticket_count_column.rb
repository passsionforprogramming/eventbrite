class AddTicketCountColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :total_tickets, :integer
  end
end
