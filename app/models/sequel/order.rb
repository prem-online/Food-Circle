module Sequel
  class Order < Sequel::Model
    many_to_one :account, class: Sequel::Account, key: :account_id, primary_key: :id
  end
end
