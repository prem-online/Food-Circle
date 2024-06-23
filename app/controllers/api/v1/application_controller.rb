module Api
    module V1
        class ApplicationController < ActionController::Base
            protect_from_forgery with: :null_session

            def set_current_user
                @current_user = Account.find_by(current_token: params[:token] || request.headers['token'])
                unless  @current_user
                    return render json: "Server cannot process your request", status: :bad_request
                end
            end

            def set_current_token
                @token = Codec.encode({id: @current_user&.id})
            end

            def update_current_token
                @current_user.update(current_token: @token)
            end
        end
    end
end