class AddCurrentTokenToAccount < ActiveRecord::Migration[7.0]
  def change
    add_column :accounts, :current_token, :string
  end
end
