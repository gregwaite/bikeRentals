class Product < ApplicationRecord
  validates :name, :price, :image, :product_type, presence: true
end