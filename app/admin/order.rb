# frozen_string_literal: true
ActiveAdmin.register Order do
    menu label: "Orders"
    permit_params :order_number, :total, order_items_attributes: [:id, :product_id, :quantity, :_destroy]
    filter :products
    filter :total
    filter :created_at


        index title: 'Order List' do
          selectable_column
            column 'Order Id' do |o|
              'ODN'+o.id.to_s
            end
            column :products do |order|
                order.products.each do |product|
                    product.name
                end
            end
            column :total do |order|
                order.products.pluck(:price).sum 
            end
            actions
        end

        show do
            
            panel "Products" do
              table_for order.products do
                column :name
                column :price
              end
            end
            
            attributes_table do
              row :total do
                  order.products.pluck(:price).sum
              end
              row :date do
                order.created_at.strftime('%e %b %Y')
              end
            end
        end


        form do |f|
          f.inputs "Order Details" do
            f.input :order_number, input_html:{value: Order.new_order_number, disabled: true}
            # Add inputs for other attributes as needed
          end
      
          f.inputs "Order Items" do
            f.has_many :order_items, heading: true, allow_destroy: true do |item|
              item.input :product
              item.input :quantity
              item.input :_destroy, as: :boolean, required: false, label: 'Remove item'
              # Add other order item attributes as needed
            end
          end
      
          f.actions
        end
        
end
  