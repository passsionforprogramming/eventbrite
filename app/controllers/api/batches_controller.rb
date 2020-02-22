class Api::BatchesController < ApplicationController
    before_action :require_user_owns_batch!, only: [:update, :destroy]
    def create
        @batch = Batch.new(batch_params)
        @batch.owner_id = current_user.id
        if @batch.save!
            @batch.quantity.times do 
                Ticket.create(name: @batch.name, event_id: @batch.event_id, description: @batch.description, price: @batch.price, owner_id: @batch.owner_id, batch_id: @batch.id)
            end
            @batches = current_user.batches
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
        @batches = current_user.batches
    end

    def update
        @batch = Batch.find(params[:id])
        if @batch.update(batch_params)
            render :show
        else
            render json: ["Your tickets failed to update"]
        end
    end

    def destroy
        batch = Batch.find(params[:id])
        if batch.destroy
            render json: ["Batch was successfully destroyed"]
        else
            render json: ["Your batch failed to destroy"]
        end
    end

    private
    def batch_params
        params.require(:batch).permit(:sale_start_time, :sale_end_time, :visibility, :absorb_fees, :quantity, :price, :min_num_tickets_sold, :max_num_tickets_sold, :sales_channel, :name, :owner_id, :event_id)
    end

    def require_user_owns_batch!
    return if current_user.batches.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end
end
