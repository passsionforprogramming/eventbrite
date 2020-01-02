Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show]
    resources :events, only: [:create, :destroy, :update, :show]
    resources :tags, only: [:create, :show, :destroy, :update]
    resource :session, only: [:create, :destroy, :show]
    post '/members/', to: 'members#verify'
  end
  root "static_pages#root"

end
