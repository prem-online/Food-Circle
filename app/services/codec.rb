class Codec
    
  @@secret = ENV['JWT_SECRET_KEY']
  @@algorithm = 'HS256'

  def self.encode(payload)
    JWT.encode(payload, @@secret, @@algorithm)
  end

  def self.decode(token)
    JWT.decode(token, @@secret, true, { algorithm: @@algorithm })&.first
  end
end 