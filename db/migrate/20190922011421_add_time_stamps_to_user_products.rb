class AddTimeStampsToUserProducts < ActiveRecord::Migration[5.2]
  def change
     add_timestamps :user_products, null: true 

     long_ago = DateTime.new(2000, 1, 1)
     UserProduct.update_all(created_at: long_ago, updated_at: long_ago)

     change_column_null :user_products, :created_at, false
     change_column_null :user_products, :updated_at, false
  end
end
