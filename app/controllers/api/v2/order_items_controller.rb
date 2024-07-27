module Api
  module V2
    class OrderItemsController < ApplicationController
      before_action :set_order_item, only: %i[update show]

      def show
        render json: OrderItemSerializer.new(@order_item), status: :ok
      end

      def update
        return unless @order_item.update(order_items_params)

        render json: OrderItemSerializer.new(@order_item, meta: { message: 'Order item updated successfully' }),
               status: :ok
      end

      private

      def order_items_params
        params.require(:order_item).permit(:product_id, :quantity)
      end

      def set_order_item
        @order_item = OrderItem.find_by_id(params[:id])
        return if @order_item

        render json: { message: 'Order item not found' }, status: :not_found
      end
    end
  end
end
