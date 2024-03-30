# frozen_string_literal: true

ActiveAdmin.register_page "New Order" do
  content do
    # para "Hello World"
    products = Product.all
    render partial: 'new_order', locals: {products: products}
  end

end
  