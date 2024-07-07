class ProductSerializer
  include JSONAPI::Serializer
  attributes :name, :price
end
