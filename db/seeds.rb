# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Product.delete_all
UserProduct.delete_all
Order.delete_all

User.create!(
  username: 'guest',
  password: 'password'
)

Product.create!(
  name: "Adult Male Bike",
  price: 20.50,
  image: "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
  product_type: "bike"
)
Product.create!(
  name: "Adult Female Bike",
  price: 20.50,
  image: "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
  product_type: "bike"
)
Product.create!(
  name: "Kids Unisex Bike",
  price: 12.75,
  image: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
  product_type: "bike"
)


Product.create!(
  name: "Adult Unisex Helmet",
  price: 4.00,
  image: "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
  product_type: "accessory"
)
Product.create!(
  name: "Kids Unisex Helmet",
  price: 3.50,
  image: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
  product_type: "accessory"
)
Product.create!(
  name: "Insurance",
  price: 9.99,
  image: "http://via.placeholder.com/250x250?text=Insurance",
  product_type: "addon"
)