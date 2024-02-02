class OrderItem < ApplicationRecord
    belongs_to :order
    belongs_to :food_item
    def self.ransackable_attributes(auth_object = nil)
        ["created_at", "food_item_id", "id", "order_id", "updated_at"]
    end
    
    def self.ransackable_associations(auth_object = nil)
        ["order_items", "orders"]
    end
    
end
