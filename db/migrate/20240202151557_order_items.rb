class OrderItems < ActiveRecord::Migration[7.0]
  def change
    create_table :order_items do |t|
      t.belongs_to :order
      t.belongs_to :food_item
      t.timestamps
    end
  end
end
