class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :product
  before_create :add_item_price
  after_create :update_product_sales

  validates :quantity, :product, presence: true
  after_validation :add_item_price

  before_save :update_sub_total
  def self.ransackable_attributes(auth_object = nil)
    %w[created_at id order_date order_id product_id quantity updated_at]
  end

  private

  def add_item_price
    self.item_price = product.price
  end

  def update_sub_total
    self.sub_total = quantity.to_f * item_price.to_f
  end

  def update_product_sales
    sales = product.sales.to_i + 1
    sold_quantity = product.sold_quantity.to_i + quantity.to_i
    product.update(sales:, sold_quantity:)
  end
end
