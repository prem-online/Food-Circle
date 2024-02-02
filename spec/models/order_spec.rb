require 'rails_helper'
RSpec.describe Order, type: :model do
    describe 'associations' do
        it { should have_many(:order_items) }
        it { should have_many(:food_items).through(:order_items) } 
    end
end