Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show]
    resources :events, only: [:create, :destroy, :update, :show, :index]
    resources :likes, only: [:create, :destroy, :update, :show, :index]
    resources :tags, only: [:create, :show, :destroy, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :tickets, only: [:create, :destroy, :update, :show]
    resources :batches, only: [:create, :destroy, :update, :show, :index]
    get '/users_tickets/', to: 'tickets#users_tickets'
    get '/events_tickets/:event_id', to: 'tickets#events_tickets'
    get 'events_search/:q', to: "events#search"
    post '/members/', to: 'members#verify'
    post '/publish_event', to: "events#publish_event"
  end
  root "static_pages#root"

end
