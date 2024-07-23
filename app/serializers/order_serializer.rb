class OrderSerializer
  include JSONAPI::Serializer
  attributes :order_number, :total, :created_at, :updated_at
  has_many :order_items

  attribute :order_items do |order|
    order_items = order.order_items.includes(:product)
    order_item_collection = order_items.inject([]) do |acc, item|
      acc.push(
        {
          id: item.id,
          name: item.product.name,
          quantity: item.quantity,
          unit_price: item.product.price,
          sub_total: item.product.price.to_f * item.quantity.to_f,
          product_id: item.product.id
        }
      )
    end
    order_item_collection
  end
end
