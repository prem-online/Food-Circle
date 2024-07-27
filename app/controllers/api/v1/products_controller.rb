module Api
  module V1
    class ProductsController < ApplicationController
      before_action :validate_json_web_token
      def index
        products = Product.order(:name).all
        render json: ProductSerializer.new(
          products.page(params[:page] || 1).per(params[:per] || 50),
          meta: {
            total: products.count,
            current_page: params[:page]
          }
        ), status: :ok
      end
    end
  end
end
