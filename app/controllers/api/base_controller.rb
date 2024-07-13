module Api
  class BaseController < ActionController::API
    include JsonWebTokenValidation
    before_action :validate_json_web_token, :set_current_user

    private

    def set_current_user
      @current_user = Account.find_by(id: @token['account_id'])
      return if @current_user

      render json: { message: 'Account not found' }, status: :not_found
    end

    attr_reader :current_user

    def authenticate_user!
      head :unauthorized unless current_user
    end
  end
end
