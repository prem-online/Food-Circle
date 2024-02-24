class OrderItem < ApplicationRecord
    belongs_to :order
    belongs_to :product
    def self.ransackable_attributes(auth_object = nil)
        %w[created_at id order_date order_id product_id quantity updated_at]
    end
    
      # ... (your existing code)
end