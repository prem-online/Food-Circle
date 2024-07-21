Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "business/products#index"
  root 'root#index'

  get '*path', to: 'root#index', constraints: lambda { |request|
    allowed_paths_regex = /\b(api|business|admin)\b/
    !request.xhr? && request.format.html? && !allowed_paths_regex.match?(request.path)
  }

  # API ROUTES
  namespace :api do
    namespace :v1 do
      # product routes
      post 'orders', to: 'orders#create'
      get 'orders', to: 'orders#index'
      resources :accounts, only: [:create]
      resources :logins, only: [:create] do
        collection do
          delete '/', to: 'logins#logout'
          post 'refresh', to: 'logins#refresh'
        end
      end
      resources :products, only: %i[index show]
    end
    namespace :v2 do
      post                  'orders',                         to: 'orders#create'
      get                   'orders/:id',                     to: 'orders#show'
      patch                 'orders/:id',                     to: 'orders#update'
      delete                'orders/:id',                     to: 'orders#destroy'

      post                  'products',                       to: 'products#create'
      get                   'products/:id',                   to: 'products#show'
      patch                 'products/:id',                   to: 'products#update'
      delete                'products/:id',                   to: 'products#destroy'
    end
  end

  namespace :business2 do
    get 'products/:id/invoice', to: 'pages#invoice'
  end
end
