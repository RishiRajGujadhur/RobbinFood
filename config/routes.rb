Rails.application.routes.draw do
    root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json} do 
    resources :users
    resource :sessions
    # resources :stocks, param: :symbol, only: [:show, :index]
    resources :stocks
    resources :transactions, only: [:create]
    resources :watchlists, only: [:create, :destroy]
  end
end
