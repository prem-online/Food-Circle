class Product < ApplicationRecord
  has_many :order_items
  has_many :orders, through: :order_items
  belongs_to :account
  has_one :bestseller, foreign_key: %i[name account_id], primary_key: %i[name account_id]

  validates :name, uniqueness: { message: 'already added' }
  validates :name, length: { in: 3..200 }
  validates :price, numericality: { other_than: 0 }
  before_create :add_default_account
  def self.ransackable_attributes(auth_object = nil)
    %w[created_at id name price updated_at]
  end

  def add_default_account
    return if account_id

    account = Account.find_by(email: ENV['ADMIN_EMAIL'])
    return unless account

    self.account_id = account.id
  end

  def self.ransackable_associations(auth_object = nil)
    %w[order_items orders]
  end
end
