Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show]
    resources :events, only: [:create, :destroy, :update, :show, :index]
    resources :likes, only: [:create, :destroy, :update, :show, :index]
    resources :tags, only: [:create, :show, :destroy, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :tickets, only: [:create, :destroy, :update, :show]
    get '/users_tickets/', to: 'tickets#users_tickets'
    get '/events_tickets/:event_id', to: 'tickets#events_tickets'
    post '/members/', to: 'members#verify'
  end
  root "static_pages#root"

end
