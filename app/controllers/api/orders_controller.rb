class Api::OrdersController < ApplicationController
  def create
    if current_user
      @order = Order.new()
      @order.user_id = current_user.id
      @order.save!
      params[:user_products].each do |product|
        params = {
          order_id: @order.id, 
          user_id: @order.user_id, 
          product_id: product[1]["product_id"].to_i, 
          amount: product[1]["amount"].to_i
        }
        @order.user_products.create!(params)
      end
      
      render :show
    else 
      render json: ["No one is logged in"], status: 404
    end
  end

  def index
    if current_user
      @orders = Order.where(user_id: current_user.id)
      render :index
    else
      render json: ["No one is logged in"], status: 404
    end
  end

  def order_params
    params.require(:user_products).permit(:product_id, :amount)
  end
end