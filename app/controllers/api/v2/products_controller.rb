module Api
  module V2
    class ProductsController < ApplicationController
      before_action :set_product, only: %i[edit update show destroy]

      def create
        @product = Product.new(product_params)
        @product.account_id = @current_user.id
        if @product.save
          render json: ProductSerializer.new(@product, meta: { message: 'Product created successfully' }),
                 status: :created
        else
          render json: @product.errors, status: :unprocessable_entity
        end
      end

      def show
        render json: ProductSerializer.new(@product), status: :ok
      end

      def update
        return unless @product.update(product_params)

        render json: ProductSerializer.new(@product, meta: { message: 'Product updated successfully' }), status: :ok
      end

      def destroy
        return render json: { message: 'Product deleted successfully' }, status: :ok if @product.destroy

        render json: @product.errors, status: :unprocessable_entity
      end

      def best_sellers
        products = Product.order(sales: :desc).last(params[:count] || 5)
        render json: ProductSerializer.new(products), status: :ok
      end

      private

      def product_params
        params.require(:products).permit(:name, :price)
      end

      def set_product
        @product = Product.find(params[:id])
        render json: { message: 'Product not found' }, status: :not_found unless @product
      end
    end
  end
end
