class Api::TicketsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create
        @ticket = Ticket.new(ticket_params)
        if @ticket.save
            render :show
        else
            render json: ["There was an error creating your ticket"], status: 422
        end
    end

    def show
        @ticket = Ticket.find(params[:id])
        render :show
    end

    def users_tickets
        @users_tickets = current_user.tickets
        render 'api/batches/purchase_tickets'
    end

    def events_tickets
        @ticket = Ticket.find_by(event_id: params[:event_id])
    end

    private
    def ticket_params
        params.require(:ticket).permit(:ticket_code, :name, :owner_id, :event_id, :donation, :description, :type, :price, :batch_id)
    end
end
