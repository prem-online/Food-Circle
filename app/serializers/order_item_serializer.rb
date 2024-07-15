class OrderItemSerializer
  include JSONAPI::Serializer
  attributes :product_id, :order_id, :quantity, :order_date, :created_at, :updated_at, :item_price
end
