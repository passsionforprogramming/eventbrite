class Api::LikesController < ApplicationController
    def create
        @current_user = current_user
        like = Like.find_by(event_id: like_params[:event_id], user_id: current_user.id)
        if !like.nil? 
            like.destroy
            @events = current_user.likes.map do |like|
                Event.find(like.event_id)
                end
                render "api/events/index"
        else        
            @like = Like.new(like_params)
            if @like.save
                @events = current_user.likes.map do |like|
                Event.find(like.event_id)
                end
                render "api/events/index"
            else
                render json: ["There was an error creating your event"], status: 422
            end
        end
    end


    def index
        @current_user = current_user
        @liked = current_user.likes
        @events = current_user.likes.map do |like|
            Event.find(like.event_id)
        end
    end

    private
    def like_params
        params.require(:like).permit(:event_id, :user_id)
    end
end
