class OrderSerializer
  include JSONAPI::Serializer
  attributes :order_number, :total, :created_at, :updated_at
  attribute :order_items do |order|
    order_items = order.order_items.includes(:product)
    order_item_collection = order_items.inject([]) do |acc, item|
      acc.push(
        {
          name: item.product.name,
          quantity: item.quantity,
          unit_price: item.product.price,
          sub_total: item.product.price.to_f * item.quantity.to_f
        }
      )
    end
    order_item_collection
  end
end
