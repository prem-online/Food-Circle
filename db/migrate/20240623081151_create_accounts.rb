class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :email, unique: true, null: false
      t.string :password_digest

      t.timestamps
    end
  end
end
