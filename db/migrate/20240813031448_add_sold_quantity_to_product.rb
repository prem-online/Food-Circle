class AddSoldQuantityToProduct < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :sold_quantity, :integer
  end
end
