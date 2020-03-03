class Api::BatchesController < ApplicationController
    before_action :require_user_owns_batch!, only: [:update, :destroy]
    def create
        @batch = Batch.new(batch_params)
        @batch.owner_id = current_user.id
        if @batch.save!
            print("Batch Qantity is #{@batch.quantity}")
            @batch.quantity.times do 
                Ticket.create!(name: @batch.name, event_id: @batch.event_id, description: @batch.description, price: @batch.price, batch_id: @batch.id)
            end
            @batches = current_user.batches.where(event_id: @batch.event_id)
            render :index
        else
            render json: ["There was an error creating your tickets"], status: 422
        end
    end

    def show
        @batch = Batch.find(params[:id])
    end

    def index
        render json: ["You need to be logged in to view your tickets"] if !logged_in?
        print(params[:event])
        @batches = current_user.batches.where(event_id: params[:event])
    end

    def update
        @batch = Batch.find(params[:id])
        render json: ["You can't decrease the number of tickets to less than the amount that have already been sold to your guests."] if batch_params.has_key?(:quantity) && batch_params[:quantity].to_i < @batch.tickets.where.not(owner_id: nil).count
        if @batch.update(batch_params)
            ticket_params = batch_params.select { |k, v| k == :price || k == :name || k == :description}
            @batch.tickets.where(owner_id: nil).update_all(ticket_params)
            tickets = @batch.tickets
            purchased_tickets = tickets.where.not(owner_id: nil);
            quantity = @batch.quantity
            tickets_count = tickets.count
            if quantity > tickets_count
                difference = quantity - tickets_count
                difference.times do 
                    Ticket.create(name: @batch.name, event_id: @batch.event_id, description: @batch.description, price: @batch.price, batch_id: @batch.id)
                end
            elsif quantity < tickets_count
                if quantity >= purchased_tickets.count
                    difference = quantity - tickets_count
                    non_purchased_tickets = tickets.where(owner_id: nil)
                    difference.times do 
                        last = non_purchased_tickets.last
                        last.destroy
                    end
                end
            end
            @batches = current_user.batches.where(event_id: @batch.event_id)
            render :index
        else
            render json: ["Your tickets failed to update"]
        end
    end

    def destroy
        batch = Batch.find(params[:id])
        event_id = batch.event_id
        if batch.destroy
            @batches = current_user.batches.where(event_id: event_id)
            render :index
        else
            render json: ["Your batch failed to destroy"]
        end
    end

    private
    def batch_params
        params.require(:batch).permit(:sale_start_time, :paymentType, :sale_end_time, :visibility, :absorb_fees, :quantity, :price, :min_num_tickets_sold, :max_num_tickets_sold, :sales_channel, :name, :owner_id, :event_id)
    end

    def require_user_owns_batch!
    return if current_user.batches.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end
end
