module Api
  module V2
    class OrdersController < ApplicationController
      before_action :set_order, only: %i[edit update show destroy update_order_total]

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

      def show
        render json: OrderSerializer.new(@order), status: :ok
      end

      def update
        return unless @order.update(order_params)

        render json: OrderSerializer.new(@order, meta: { message: 'Order updated successfully' }), status: :ok
      end

      def update_order_total
        return unless @order.update_total

        render json: OrderSerializer.new(@order, meta: { message: 'Order updated successfully' }), status: :ok
      end

      def destroy
        return render json: { message: 'Order deleted successfully' }, status: :ok if @order.destroy

        render json: @order.errors, status: :unprocessable_entity
      end

      def latest_orders
        @orders = Order.last(params[:count] || 5)
        render json: OrderSerializer.new(@orders), status: :ok
      end

      private

      def order_params
        params.require(:order).permit(:total, order_items_attributes: %i[product_id quantity _destroy])
      end

      def order_items_params
        params.permit(order_items: %i[product_id quantity item_price])
      end

      def add_order_items_to_order
        order_items_params[:order_items].each { |item| @order.order_items.new(item) }
      end

      def set_order
        @order = Order.find_by_id(params[:id])
        return if @order

        render json: { message: 'Order not found' }, status: :not_found
      end
    end
  end
end
