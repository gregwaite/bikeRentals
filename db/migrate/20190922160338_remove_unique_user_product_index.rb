class RemoveUniqueUserProductIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :user_products, [:product_id, :user_id]
  end
end
