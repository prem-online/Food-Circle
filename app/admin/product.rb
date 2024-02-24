# frozen_string_literal: true
ActiveAdmin.register Product do
    menu 
    permit_params :name, :price
    batch_action :destroy, confirm: "Are you sure you want to delete selected products?" do |ids|
      begin
        Product.where(id: ids).delete_all
        resultant = { message: "Selected products deleted successfully", type: :notice }
      rescue
        resultant = { message: "Cannot destroy selected products", type: :error }
      end
      redirect_to admin_products_path, flash: { resultant[:type] => resultant[:message] }
    end
  
    filter :name
    filter :created_at
    actions :all, :except => [:destroy]

        index title: 'Products' do
          selectable_column
          column ' Name' do |product|
            product.name 
          end
          column :price
          actions
        end

        controller do
          def create
            super do |success,failure|
              success.html { redirect_to admin_products_path }
            end
          end
        end
end
  