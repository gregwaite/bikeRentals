class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.string :image, null: false
      t.string :product_type, null: false

      t.timestamps
    end

    add_index :products, :name
    add_index :products, :price
    add_index :products, :product_type
  end
end
