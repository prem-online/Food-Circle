# frozen_string_literal: true

ActiveAdmin.register Order do
  menu label: 'Orders'
  permit_params :order_number, :total, order_items_attributes: %i[id product_id quantity _destroy]
  filter :products
  filter :total
  filter :created_at
  config.clear_action_items!

  index title: 'Order List' do
    selectable_column
    column :order_number
    column :products do |order|
      order.products.each do |product|
        product.name
      end
    end
    column :total
    column  'Order Date', :created_at do |object|
      object.created_at.strftime('%e %b at %I:%M%p, %Y')
    end
    actions defaults: false do |order|
      link_to 'View', business_order_path(order), class: 'view_link member_link'
    end
    actions defaults: false do |order|
      link_to 'Invoice', business2_path(order.id), class: 'view_link member_link'
    end

  end

  show do
    panel 'Products' do
      table_for order.order_items do
        column :name do |oi|
          oi.product.name
        end
        column :item_price
        column :quantity
      end
    end

    attributes_table do
      row :total do
        order.total
      end
      row :date do
        order.created_at.strftime('%e %b %Y')
      end
    end
  end

end
