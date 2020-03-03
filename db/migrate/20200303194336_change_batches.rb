class ChangeBatches < ActiveRecord::Migration[5.2]
  def change
    rename_column :batches, :type, :paymentType
  end
end
