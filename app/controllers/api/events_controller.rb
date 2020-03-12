class Api::EventsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]
    before_action :require_user_owns_event!, only: [:update, :destroy]
    def create
        @current_user = current_user
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
        @current_user = current_user
        print @current_user
        @events = Event.where(published: true)
    end

    def show
        @current_user = current_user
        @event = Event.find(params[:id])
        @tags = @event.tags.pluck(:name)
        @has_batches = @event.batches.count > 0
    end

    def destroy
        @current_user = current_user
        @event = Event.find(params[:id])
        @event.destroy
        user_events
    end

    def update
        @current_user = current_user
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
        @current_user = current_user
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
        @current_user = current_user
        query = params.has_key?(:q) ? params[:q] : nil
        if query 
            @events = Event.search(query).limit(5) 
            render :index
        end
    end

    def user_events
        @current_user = current_user
        events = current_user.events
        events.each do |event|
            total_tickets = 0
            sold = 0
            event.batches.each do |batch|
                total_tickets += batch.quantity if batch.quantity
                sold += batch.tickets_sold if batch.tickets_sold
            end
            event.update(total_tickets: total_tickets, sold: sold)
        end
        @events = current_user.events.order(:published)
        render "api/events/user_events"
    end

    def publish_event
        @current_user = current_user
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
        params.require(:event).permit(:title, :id, :user_id, :category, :eventType, :organizer, :photo, :start_time, :end_time, :display_start_time, :display_end_time, :timezone, :image_url, :description, :published, :status, :sold, :gross, :views, :location_address, :location_type, :maps_lat, :maps_lon, :lat_lon, tags: [])
    end

    def require_user_owns_event!
    return if current_user.events.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end
end
