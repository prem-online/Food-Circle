class Order < ApplicationRecord
=begin
    Table Order
      t.serial :order_number
      t.float :total
=end

    has_many :order_items, dependent: :destroy
    has_many :products, through: :order_items   
    accepts_nested_attributes_for :order_items
    def self.ransackable_attributes(auth_object = nil)
        column_names + _ransackers.keys
    end

    def self.ransackable_associations(auth_object = nil)
        reflect_on_all_associations.map { |a| a.name.to_s } + _ransackers.keys
    end

    def self.new_order_number
        last_id = Order.ids.last
        order_number = last_id.nil? ? 1 : last_id
        order_number_with_zeros = remove_first_character((1000000+order_number).to_s)
        'ON'+order_number_with_zeros
    end

    def self.remove_first_character(input_str)
        input_str[1..-1]
    end
end
