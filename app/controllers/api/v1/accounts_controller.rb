module Api
    module V1
        class AccountsController < ApplicationController
            after_action :update_current_token,  only: :create
            
            def index
                render json: Account.all
            end

            def show
                render json: Account.find(params[:id])
            end

            def create
                @current_user = Account.new(account_params)
                if @current_user.save
                    render json: AccountSerializer.new(
                        @current_user,
                        meta: {
                            token: set_current_token,
                            message: 'Account was successfully created'
                        }), status: :created
                else
                    render json: @current_user.errors&.full_messages, status: :unprocessable_entity
                end
            end

            def update
                account = Account.find(params[:id])
            end 

            def destroy
                account = Account.find(params[:id])
                account.destroy
            end

            private

           

            def account_params
                params.require(:account).permit(:email, :password, :password_confirmation)
            end
        end
    end
end