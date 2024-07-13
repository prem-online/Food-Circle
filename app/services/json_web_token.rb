class JsonWebToken
    
  @@secret = ENV['JWT_SECRET_KEY']
  @@algorithm = 'HS256'

  def self.encode(payload,expiration = 24.hours.from_now.to_i)
    payload[:exp] = expiration || Time.now.to_i + 120
    JWT.encode(payload, @@secret, @@algorithm)
  end

  def self.decode(token)
    JWT.decode(token, @@secret, true, { algorithm: @@algorithm })&.first
  end
end 