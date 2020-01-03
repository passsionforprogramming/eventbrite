class Api::LikesController < ApplicationController
    def create
        @like = Like.new(like_params)
        if @like.save
            @events = current_user.likes.map do |like|
            Event.find(like.event_id)
            end
            render "api/events/show"
        else
            render json: ["There was an error creating your event"], status: 422
        end
    end

    def index
        @liked = current_user.likes
        @events = current_user.likes.map do |like|
            Event.find(like.event_id)
        end
    end

    private
    def like_params
        params.require.permit(:event_id, :user_id)
    end
end
