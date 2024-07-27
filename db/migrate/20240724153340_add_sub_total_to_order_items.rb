class AddSubTotalToOrderItems < ActiveRecord::Migration[7.0]
  def change
    add_column :order_items, :sub_total, :integer
  end
end
