class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.serial :order_number
      t.float :total

      t.timestamps
    end
  end
end
