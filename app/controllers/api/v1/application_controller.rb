module Api
  module V1
    class ApplicationController < ActionController::Base
      include JsonWebTokenValidation
      protect_from_forgery with: :null_session

      def encode_user_token
        JsonWebToken.encode({ id: @current_user&.id })
      end

      def current_user
        @current_user = Account.find_by(id: @token['account_id'])
        return if @current_user

        render json: { message: 'Account not found' }, status: :not_found
      end
    end
  end
end
