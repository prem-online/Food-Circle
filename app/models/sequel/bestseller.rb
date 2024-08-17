# app/models/bestseller.rb
module Sequel
  class Bestseller < Sequel::Model
    many_to_one :product, class: Sequel::Product, key: %i[name account_id],
                          primary_key: %i[name account_id]
    many_to_one :account, class: Sequel::Account

    def validate
      super
      validates_unique(%i[name account_id])
    end
  end
end
