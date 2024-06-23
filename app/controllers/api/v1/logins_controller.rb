module Api
    module V1
        class LoginsController < ApplicationController
            before_action :set_current_user, only: :destroy
            before_action :set_user, only: :create
            after_action :update_current_token, only: :create
            
            def create
                if @current_user && @current_user.authenticate(params[:password])
                    render json: AccountSerializer.new(
                        @current_user,
                        meta:{
                            message: 'Logged in successfully',
                            token: set_current_token
                        }
                    ), status: :ok
                else
                    render json: { error: "Invalid email or password" }, status: :unauthorized
                end
            end

            def destroy
                if @current_user.update(current_token: nil)
                    render json: {message: 'Logged out successfully'}, status: :ok
                else
                    render json: {error: 'Cannot Logged out successfully'}, status: :unprocessable_entity
                end
            end

            private 

            def set_user
                @current_user = Account.find_by_email(params[:email])
                return render json: { error: "Not Account found, please signup" }, status: :not_found unless  @current_user
            end

        end
    end
end