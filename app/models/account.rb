class Account < ApplicationRecord
    has_secure_password
    
    validates_uniqueness_of :email
    validates_presence_of :email
    
    has_many :orders, dependent: :delete_all
end
