# frozen_string_literal: true

ActiveAdmin.register Order do
  menu label: 'Orders'
  permit_params :order_number, :total, order_items_attributes: %i[id product_id quantity _destroy]
  filter :products
  filter :total
  filter :created_at

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
    actions
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


  form do |f|
    f.inputs "Items" do
      f.has_many :order_items, heading: false do |oi|
        oi.input :product, :as => :selectize
        oi.input :quantity, :as => :selectize, collection: (1..100).to_a
      end
    end
    f.actions
  end


end
