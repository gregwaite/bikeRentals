class Product < ApplicationRecord
  validates :name, :price, :image, :product_type, presence: true

  has_many :user_products
  has_many :users,
    through: :user_product,
    source: :user
end