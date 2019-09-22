@orders.each do |order|
  json.set! order.id do
    json.set! products do
      order.products.each do |product|
        json.set! product.id do
          json.partial! 'product', product: product
        end
      end
    end
    json.set! user_products do
      order.user_products.each do |user_product|
        json.extract! user_product, :product_id, :amount
      end
    end
  end
end