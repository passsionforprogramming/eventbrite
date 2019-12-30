class Api::EventsController < ApplicationController
    before_action :require_logged_in
    before_action :require_user_owns_event!, only: [:update, :destroy]
    def create
        @event = current_user.events.new(event_params)
        if @event.save
            render "api/events/show"
        else
            render json: ["There was an error creating your event"], status: 422
        end
    end

    def destroy
        @event = Event.find(params[:id])
    end

    def update
        @event = Event.find(params[:id])
        if @event.update(event_params)
            render "api/events/show"
        else
            render json: ["There was an error updating your event"], status: 422
        end
    end

    private
    def event_params
        params.require(:event).permit(:title, :user_id, :category, :type, :organizer, :start_time, :end_time, :display_start_time, :display_end_time, :timezone, :image_url, :description, :published, :status, :sold, :gross, :views)
    end

    def require_user_owns_event!
    return if current_user.events.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end
end
