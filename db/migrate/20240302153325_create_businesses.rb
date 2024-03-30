class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :email
      t.boolean :activated
      t.datetime :last_login
      t.boolean :blacklisted

      t.timestamps
    end
  end
end
