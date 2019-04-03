Rails.application.routes.draw do
  
    root to: 'sessions#new'
    resources :users
    resources :locations
    resources :timetracks
    resources :sessions
    get 'index', to: 'timetracks#index'
    get 'account', to: 'users#edit'
    get 'login', to: 'sessions#new'
    get 'signup', to: 'users#new'
    get 'offices', to: 'locations#index'
    get 'office', to: 'locations#new'
    get 'savepoint', to: 'timetracks#new'
    delete 'logout', to: 'sessions#destroy'
    post 'login', to: 'sessions#create'
    get 'map', to: 'locations#map'

end
