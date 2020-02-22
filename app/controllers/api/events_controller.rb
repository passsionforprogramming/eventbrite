class Api::EventsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]
    before_action :require_user_owns_event!, only: [:update, :destroy]
    def create
        @tags = event_params[:tags]
        new_params = event_params.select { |k, v| k != "tags" }
        @event = Event.new(new_params);
        print(@event)
        if @event.save
            render "api/events/show"
            if @tags
                @tags.each do |tag|
                new_tag = Tag.new(name: tag, event_id: @event.id)
                if new_tag.save
                    print ("Tag saved successfully")
                else
                    print ("Tag not saved")
                    puts(new_tag.errors.full_messages)
                end
            end
               end
        else
            render json: ["There was an error creating your event"], status: 422
        end
    end

    def index
        @events = Event.all

    end

    def show
        @event = Event.find(params[:id])
        @tags = @event.tags.pluck(:name)
    end

    def destroy
        @event = Event.find(params[:id])
        @event.destroy
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
        params.require(:event).permit(:title, :user_id, :category, :eventType, :organizer, :photo, :start_time, :end_time, :display_start_time, :display_end_time, :timezone, :image_url, :description, :published, :status, :sold, :gross, :views, :location_address, :location_type, :lat, :lon, tags: [])
    end

    def require_user_owns_event!
    return if current_user.events.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end
end
