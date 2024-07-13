class CreateRefreshTokens < ActiveRecord::Migration[7.0]
  def change
    create_table :refresh_tokens do |t|
      t.references :account, null: false, foreign_key: true
      t.string :token, null: false, unique: true
      t.datetime :expires_at, null: false

      t.timestamps
    end
  end
end
