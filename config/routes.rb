Rails.application.routes.draw do
  devise_for :users
  resources :employees
  
  root 'home#index'
  # get 'home/index'
  get 'home/portfolio'
  get 'home/about'
  get 'home/resume'
  # root 'employees#index'
  get 'employees/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # namespace :api do
  #   namespace :v1 do
  #     resources :posts
  #   end
  # end
 
  # get '*path', to: 'pages#index', via: :all
end
