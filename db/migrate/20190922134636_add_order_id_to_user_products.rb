class AddOrderIdToUserProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :user_products, :order_id, :integer, null: false
    add_index :user_products, :order_id
  end
end
