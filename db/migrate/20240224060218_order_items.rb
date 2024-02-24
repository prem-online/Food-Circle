class OrderItems < ActiveRecord::Migration[7.0]
  def change
    create_table :order_items do |t|
      t.belongs_to :product
      t.belongs_to :order
      t.integer :quantity, :default => 0
      t.datetime :order_date
      t.timestamps
    end
  end
end
