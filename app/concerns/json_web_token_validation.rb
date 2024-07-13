module JsonWebTokenValidation
  ERROR_CLASSES = [
    JWT::DecodeError,
    JWT::ExpiredSignature
  ].freeze

  private

  def validate_json_web_token
    token = request.headers[:token] || params[:token]
    begin
      @token = JsonWebToken.decode(token)
    rescue *ERROR_CLASSES => e
      handle_exception e
    end
  end

  def handle_exception(exception)
    # order matters here
    # JWT::ExpiredSignature appears to be a subclass of JWT::DecodeError
    case exception
    when JWT::ExpiredSignature
      render json: { errors: ['Token has Expired'] },
             status: :unauthorized
    when JWT::DecodeError
      render json: { errors: ['Invalid token'] },
             status: :bad_request
    end
  end
end
