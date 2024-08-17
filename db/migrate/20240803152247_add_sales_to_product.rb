class AddSalesToProduct < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :sales, :integer, default: 0
  end
end
