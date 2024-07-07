class Order < ApplicationRecord
=begin
    Table Order
      t.serial :order_number
      t.float :total
=end
    ADMIN_EMAIL=ENV['ADMIN_EMAIL']
    has_many :order_items, dependent: :delete_all
    has_many :products, through: :order_items
    belongs_to :account
    validates :order_items, presence: true

    before_create :add_order_number, :add_default_account
    after_create :add_order_total
    accepts_nested_attributes_for :order_items, :products

    def self.ransackable_attributes(auth_object = nil)
        column_names + _ransackers.keys
    end

    def self.ransackable_associations(auth_object = nil)
        reflect_on_all_associations.map { |a| a.name.to_s } + _ransackers.keys
    end

    private

    def add_order_number
        self.order_number = new_order_number
    end

    def add_default_account
        return if self.account_id
        account = Account.find_by(:email => ADMIN_EMAIL)
        return unless account
        self.account_id = account.id
    end

    def add_item_price
        self.item_price = self.product.price
    end

    def add_order_total
        total = order_items.sum { |item| item.item_price * item.quantity }
        self.update(total: total)
    end

    def new_order_number
        last_id = Order.ids.last || 1
        order_number = 'ON' + (600000 + last_id).to_s
    end
end
