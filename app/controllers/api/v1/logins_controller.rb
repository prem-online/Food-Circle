module Api
    module V1
      class LoginsController < ApplicationController
        before_action :set_current_user, only: :destroy
        before_action :find_user_by_email, only: :create
  
        def create
          if @current_user&.authenticate(params[:password])
            render_successful_login
          else
            render_unauthorized
          end
        end

        def refresh
            refresh_token = RefreshToken.find_by(token: params[:refresh_token])
            if refresh_token && refresh_token.expires_at > Time.current
              access_token = encode_access_token(account_id: refresh_token.account_id)
              render json: { token: access_token }
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
          access_token = encode_access_token(account_id: @current_user.id)
          refresh_token = create_refresh_token(@current_user)
          render json: AccountSerializer.new(
            @current_user,
            meta: { message: 'Logged in successfully', token: access_token, refresh_token: refresh_token }
          ), status: :ok
        end
  
        def render_unauthorized
          render json: { errors: ['Invalid email or password'] }, status: :unauthorized
        end
  
        def encode_access_token(payload)
          payload[:exp] = 1.hour.from_now.to_i
          JWT.encode(payload, Rails.application.secrets.secret_key_base)
        end
  
        def create_refresh_token(account)
          RefreshToken.create!(account: account, expires_at: 7.days.from_now).token
        end
  
      end
    end
  end
  