module Api
    module V1
        class ApplicationController < ActionController::Base
            protect_from_forgery with: :null_session

            def encode_user_token
                JsonWebToken.encode({id: @current_user&.id})
            end

            def current_user
                @current_user = Account.find_by(id: @token['account_id'])
                unless @current_user
                    return render json: {message: 'Account not found'}, status: :not_found
                end
            end

            def validate_json_web_token
                begin
                    @token = JsonWebToken.decode(request.headers['token'])
                rescue JWT::VerificationError => e
                    return render json: {message: "Token verification failed: #{e.message}"}, status: :unprocessable_entity
                end
            end
        end
    end
end