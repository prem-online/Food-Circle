class ChangeColumnTypeInBestSellers < ActiveRecord::Migration[7.0]
  def up
    change_column :bestsellers, :sold_quantity, 'integer USING CAST(sold_quantity AS integer)'
    change_column_default :bestsellers, :sold_quantity, 0
  end

  def down
    change_column :bestsellers, :sold_quantity, :string
  end
end
