class Order < ApplicationRecord
  #     Table Order
  #       t.serial :order_number
  #       t.float :total
  ADMIN_EMAIL = ENV['ADMIN_EMAIL']
  has_many :order_items, dependent: :delete_all
  has_many :products, through: :order_items
  belongs_to :account
  validates :order_items, presence: true

  before_create :add_order_number
  before_save :add_default_account, if: :new_record?
  after_create :add_order_total
  accepts_nested_attributes_for :products
  accepts_nested_attributes_for :order_items, allow_destroy: true

  def self.ransackable_attributes(auth_object = nil)
    column_names + _ransackers.keys
  end

  def self.ransackable_associations(auth_object = nil)
    reflect_on_all_associations.map { |a| a.name.to_s } + _ransackers.keys
  end

  def calc_total
    order_items.pluck(:sub_total).sum
  end

  def update_total
    update(total: calc_total)
  end

  private

  def add_order_number
    self.order_number = new_order_number
  end

  def add_default_account
    return if account_id

    account = Account.find_by(email: ADMIN_EMAIL)
    return unless account

    self.account_id = account.id
  end

  def add_item_price
    self.item_price = product.price
  end

  def add_order_total
    total = order_items.sum { |item| item.item_price * item.quantity }
    update(total:)
  end

  def new_order_number
    last_id = Order.ids.last || 1
    order_number = 'ON' + (600_000 + last_id).to_s
  end

  def add_bestsellers
    # code
  end
end
