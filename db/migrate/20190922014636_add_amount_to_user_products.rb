class AddAmountToUserProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :user_products, :amount, :integer, null: false
  end
end
