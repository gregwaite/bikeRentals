1.times do
  json.set! :id, @order.id
  json.set! :user_id, @order.user_id
  json.set! :products do
    @order.products.each do |product|
      json.set! product.id do
        json.partial! 'product', product: product
      end
    end
  end
  json.set! :user_products do
    @order.user_products.each do |user_product|
      json.set! user_product.product_id do 
        json.extract! user_product, :amount
      end
    end
  end
end