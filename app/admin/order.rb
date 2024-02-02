# frozen_string_literal: true
ActiveAdmin.register Order do
    menu label: "Customer Orders"
    permit_params :name, :price, food_item_ids: []
    filter :food_items
    filter :total
    filter :created_at
        index title: 'Order List' do
            column :food_items do |order|
                order.food_items.each do |food_item|
                    food_item.name
                end
            end
            column :total do |order|
                order.food_items.pluck(:price).sum 
            end
            current_date = Date.today
            current_month = current_date.strftime('%b');
            column "#{current_date.strftime('%b %Y')}" do |order|
                order.created_at.strftime('%b') == current_month ?
                order.created_at.strftime('%e')
                : order.created_at.strftime('%e %b %Y')
            end
            column :id
            actions
        end

        show do
            
            panel "Food Items" do
              table_for order.food_items do
                column :name
                column :price
              end
            end
            
            attributes_table do
              row :total do
                  order.food_items.pluck(:price).sum
              end
              row :date do
                order.created_at.strftime('%e %b %Y')
              end
            end
        end

        form title: 'New Order' do |f|
            inputs 'Details' do
              input :food_item_ids, label: 'Food Items', as: :searchable_select, collection: FoodItem.all, multiple: true
            end
            para "Press cancel to return to the order list without saving."
            actions
          end
end
  