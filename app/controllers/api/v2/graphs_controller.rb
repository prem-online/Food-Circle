module Api::V2
  class GraphsController < ApplicationController
    def orders
      result = order_service.all
      render json: { result: }, status: :ok
    end

    def products
      result = product_service.all
      render json: { result: }, status: :ok
    end

    private

    def order_service
      OrderGraphService.new(@current_user)
    end

    def product_service
      ProductGraphService.new(@current_user)
    end
  end
end
