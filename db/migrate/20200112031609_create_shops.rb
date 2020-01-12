class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end

    add_index :shops, :title
    add_index :shops, :owner_id
  end
end
