module Api
    module V1
        class OrdersController < ApplicationController 
            skip_before_action :verify_authenticity_token
            before_action :validate_json_web_token, :current_user, only: [:index]
            def create
                @order = Order.new(order_params)
                add_order_items_to_order
                account = Account.find_by(:email => ENV['ADMIN_EMAIL'])
                @order.account_id = account.id
                if @order.save
                    render json: OrderSerializer.new(@order, meta: {message: 'Order created successfully'}), status: :created
                else
                    render json: @order.errors, status: :unprocessable_entity
                end
            end

            def index
                orders = Order.includes(:order_items).order(created_at: :desc).where(account_id: @current_user.id)
                .page(params[:page]).per(params[:per]||50)
                render json: OrderSerializer.new(orders).serializable_hash.to_json, status: :ok
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