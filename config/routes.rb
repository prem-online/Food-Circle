Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "business/products#index"
  root "root#index"
  
  get '*path', to: 'root#index', constraints: ->(request) do
    !request.xhr? && request.format.html? && (!request.path.include?('business'))
  end

  # API ROUTES
  namespace :api do
    namespace :v1 do
      # product routes
      post 'orders', to: 'orders#create'
      resources :accounts, only: [:create]
      resources :logins, only: [:create] do
        collection do
          delete '/', to: 'logins#destroy'
        end
      end
    end
  end

  namespace :business2 do
    get 'products/:id/invoice', to: 'pages#invoice'
  end
end
