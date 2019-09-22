  
class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    @product = Product.create!(product_params)
    render :show
  end

  private

  def product_params
    params.require(:product).permit( :name, :price, :image, :product_type)
  end


end