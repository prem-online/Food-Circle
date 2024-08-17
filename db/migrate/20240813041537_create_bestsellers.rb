class CreateBestsellers < ActiveRecord::Migration[7.0]
  def change
    create_table :bestsellers do |t|
      t.string :name
      t.string :sold_quantity
      t.integer :account_id, null: false
      t.string :day_month_year, null: false

      t.timestamps
    end
    add_index :bestsellers, %i[name account_id day_month_year], unique: true
  end
end
