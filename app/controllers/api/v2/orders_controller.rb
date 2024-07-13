module Api
  module V2
    class OrdersController < ApplicationController
      def create
        @order = Order.new(order_params)
        @order.account_id = @current_user.id
        if @order.save
          render json: OrderSerializer.new(@order, meta: { message: 'Order created successfully' }),
                 status: :created
        else
          render json: @order.errors, status: :unprocessable_entity
        end
      end

      private

      def order_params
        params.require(:order).permit(:total, order_items_attributes: %i[product_id quantity])
      end

      def order_params
        params.require(:order).permit(order_items_attributes: %i[product_id quantity])
      end

      def order_items_params
        params.permit(order_items: %i[product_id quantity item_price])
      end

      def add_order_items_to_order
        order_items_params[:order_items].each { |item| @order.order_items.new(item) }
      end
    end
  end
end
