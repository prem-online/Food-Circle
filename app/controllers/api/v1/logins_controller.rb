module Api
  module V1
    class LoginsController < ApplicationController
      before_action :check_secret, :find_user_by_email, only: :create

      def create
        if @current_user&.authenticate(params[:password])
          render_successful_login
        else
          render_unauthorized
        end
      end

      def refresh
        refresh_token = RefreshToken.includes(:account).find_by(token: params[:refresh_token])
        if refresh_token && refresh_token.expires_at > Time.current
          access_token = encode_access_token({ account_id: refresh_token.account_id })
          new_refresh_token = create_refresh_token(refresh_token.account)
          refresh_token.delete
          render json: { token: access_token, refresh: new_refresh_token }
        else
          render json: { error: 'Invalid or expired refresh token' }, status: :unauthorized
        end
      end

      def logout
        refresh_token = RefreshToken.find_by(token: params[:refresh_token])
        refresh_token.destroy if refresh_token
        render json: { message: 'Logged out' }
      end

      private

      def find_user_by_email
        @current_user = Account.find_by(email: params[:email])
        render json: { errors: ['User not found, please signup'] }, status: :not_found unless @current_user
      end

      def render_successful_login
        access_token = encode_access_token({ account_id: @current_user.id })
        refresh_token = create_refresh_token(@current_user)
        render json: AccountSerializer.new(
          @current_user,
          meta: { message: 'Logged in successfully',
                  login_info: { token: access_token, refresh_token:, logged_in_at: DateTime.now } }
        ), status: :ok
      end

      def render_unauthorized
        render json: { errors: ['Invalid email or password'] }, status: :unauthorized
      end

      def encode_access_token(payload)
        payload[:exp] = 1.hour.from_now.to_i
        JWT.encode(payload, ENV['JWT_SECRET_KEY'])
      end

      def create_refresh_token(account)
        RefreshToken.create!(account:, expires_at: 1.year.from_now).token
      end

      def check_secret
        render json: { errors: ['No secret found, please add one.'] }, status: :bad_request unless ENV['JWT_SECRET_KEY']
      end
    end
  end
end
