# frozen_string_literal: true
ActiveAdmin.register FoodItem do
    menu label: "Food Items"
    permit_params :name, :price

    filter :name
    filter :created_at

        index title: 'Food Items' do
          column do |food_item|
            food_item.name 
          end
          column :price
        end
end
  