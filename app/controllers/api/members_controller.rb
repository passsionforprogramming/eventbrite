class Api::MembersController < ApplicationController
    def verify
        @exists = User.exists?(email: params[:email])
        render "api/members/verify";
    end
end
