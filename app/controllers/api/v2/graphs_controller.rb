module Api::V2
  class GraphsController < ApplicationController
    def orders
      result = order_service.order_graph
      render json: { result: }, status: :ok
    end

    def products
      result = filter_by_month(Order)
      best_sellers_ids = Product.order(sales: :desc).last(params[:count] || 5).pluck(:id)

      result = result.where_exists(:order_items, product_id: best_sellers_ids)
      render json: { result: }, status: :ok
    end

    private

    def order_service
      OrderGraphService.new(@current_user)
    end
  end
end
