module Api
  module V1
      class ProductsController < ApplicationController
        before_action :validate_json_web_token
          def index
            products = Product.all
            render json: ProductSerializer.new(products), status: :ok
          end
      end
  end
end