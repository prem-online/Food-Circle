class OrderItem < ApplicationRecord
    belongs_to :order
    belongs_to :product
    before_create :add_item_price

    validates :quantity, :product, presence: true
    after_validation :add_item_price
    def self.ransackable_attributes(auth_object = nil)
        %w[created_at id order_date order_id product_id quantity updated_at]
    end

    private

    def add_item_price
        self.item_price = self.product.price
    end
end