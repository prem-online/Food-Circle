class AddFirstOiToOrder < ActiveRecord::Migration[7.0]
  def change
    add_column :orders, :first_item, :string
  end
end
