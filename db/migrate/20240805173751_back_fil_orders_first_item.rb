class BackFilOrdersFirstItem < ActiveRecord::Migration[7.0]
  def change
    orders = Order.where(first_item: nil)
    orders.each do |order|
      order.update(first_item: order.order_items.first.product.name)
    end
  end
end
