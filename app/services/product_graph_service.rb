class ProductGraphService < ApplicationService
  def initialize(user)
    @user = user
    initialize_variables
  end

  def all
    products = @user.products.order(sales: :desc).first(@bestseller_graph_items)
    binding.pry
  end
end
