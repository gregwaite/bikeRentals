class CreateUserProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :user_products do |t|
      t.integer :product_id, null: false
      t.integer :user_id, null: false
    end

    add_index :user_products, :product_id
    add_index :user_products, :user_id
    add_index :user_products, [:product_id, :user_id], unique: true
  end
end
