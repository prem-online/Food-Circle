class AddItemPriceToOrderItem < ActiveRecord::Migration[7.0]
  def change
    add_column :order_items, :item_price, :string, null: false
  end
end
