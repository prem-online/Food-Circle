class Product < ApplicationRecord
    has_many :order_items
    has_many :orders, through: :order_items
    validates_presence_of :price
    validates_uniqueness_of :name
    validates :name, length: { in: 3..200 }
    validates :price, numericality: { other_than: 0 }
    def self.ransackable_attributes(auth_object = nil)
        ["created_at", "id", "name", "price", "updated_at"]
    end

    def self.ransackable_associations(auth_object = nil)
        ["order_items", "orders"]
    end
end
