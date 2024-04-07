module Api
    module V1
        class OrdersController < ApplicationController 
            skip_before_action :verify_authenticity_token
            def create
                @order = Order.new(order_params)
                add_order_items_to_order
                if @order.save
                    render json: OrderSerializer.new(@order, meta: {message: 'Order created successfully'}), status: :created
                else
                    render json: @order.errors, status: :unprocessable_entity
                end
            end


            private

            def order_params
                params.permit(:total)
            end

            def order_items_params
                params.permit(order_items: [:product_id, :quantity, :item_price])
            end

            def add_order_items_to_order
                order_items_params[:order_items].each {|item| @order.order_items.new(item) }
            end

        end
    end
end