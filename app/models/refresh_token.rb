class RefreshToken < ApplicationRecord
  belongs_to :account

  before_create :set_token

  private

  def set_token
    self.token = SecureRandom.hex(64)
  end
end
