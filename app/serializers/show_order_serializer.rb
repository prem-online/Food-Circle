class ShowOrderSerializer
  include JSONAPI::Serializer
  attributes :order_number, :total, :created_at, :updated_at, :first_item
end