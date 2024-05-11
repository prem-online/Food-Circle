Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "business/products#index"
  get 'users/guest'
  post 'new_custom_order/new'




  # API ROUTES
  namespace :api do
    namespace :v1 do
      # product routes
      post 'orders', to: 'orders#create'
    end
  end

  namespace :business2 do
    get 'products/:id/invoice', to: 'pages#invoice'
  end
end
