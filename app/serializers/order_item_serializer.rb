class OrderItemSerializer
  include JSONAPI::Serializer
  attributes :product_id, :order_id, :quantity, :order_date, :created_at, :updated_at, :item_price
  belongs_to :order

  attribute :product_name do |order_item|
    order_item.product.name
  end
end
