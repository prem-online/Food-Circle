module Sequel
  class Account < Sequel::Model
    plugin :validation_helpers
    one_to_many :orders, class: Sequel::Order, key: :account_id, primary_key: :id
    one_to_many :products, class: Sequel::Product, key: :account_id, primary_key: :id

    def validate
      super
      validates_presence [:email]
      validates_unique :email
    end

    def authenticate(password)
      BCrypt::Password.new(password_digest) == password
    end
  end
end
