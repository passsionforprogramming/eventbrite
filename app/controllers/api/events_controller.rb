class Api::EventsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]
    before_action :require_user_owns_event!, only: [:update, :destroy]
    def create
        @tags = event_params[:tags]
        new_params = event_params.select { |k, v| k != "tags" }
        @event = Event.new(new_params);
        print(@event)
        if @event.save!
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
         @tags = event_params[:tags]
        new_params = event_params.select { |k, v| k != "tags" }
        if @event.update(new_params)
            if @tags 
                @event.tags.destroy_all
                @tags.each do |tag|
                    Tag.create(name: tag, event_id: @event.id)
                end
            end
            render "api/events/show"
        else
            render json: ["There was an error updating your event"], status: 422
        end
    end

    def search
        query = params.has_key?(:q) ? params[:q] : nil
        lat = params.has_key?(:lat) ? params[:lat] : nil
        lon = params.has_key?(:lon) ? params[:lon] : nil
        category = params.has_key?(:category) ? params[:category] : nil
        if (query && !lat && !category)
            @events = Event.search(query).where(published: true)
            render :index
        elsif (query && lat && !category)
            @events = Event.within(lat, lon, 50).search(query).where(published: true)
            render :index
        elsif (query && lat && category)
            @events = Event.within(lat, lon, 50).search(query).where(category: category).where(published: true)
            render :index
        elsif (query && !lat && category)
            @events = Event.search(query).where(category: category).where(published: true)
            render :index
        elsif (!query && lat && !category)
            @events = Event.within(lat, lon, 50).where(published: true)
        elsif (!query && !lat && category)
            @events = Event.find_by(category: category).where(published: true)
        end
    end

    def autocomplete
        query = params.has_key?(:q) ? params[:q] : nil
        if query 
            @events = Event.search(query).limit(5) 
            render :index
        end
    end

    def publish_event
        @tags = event_params[:tags]
        new_params = event_params.select { |k, v| k != "tags" }
        @event = Event.find(new_params[:id])
        print(@event)
        if @event.update(new_params)
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
               render "api/events/show"
        else
            render json: ["There was an error creating your event"], status: 422
        end
    end

    private
    def event_params
        params.require(:event).permit(:title, :id, :user_id, :category, :eventType, :organizer, :photo, :start_time, :end_time, :display_start_time, :display_end_time, :timezone, :image_url, :description, :published, :status, :sold, :gross, :views, :location_address, :location_type, :lat_lon, tags: [])
    end

    def require_user_owns_event!
    return if current_user.events.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end
end
