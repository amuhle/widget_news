class CreateSimplePages < ActiveRecord::Migration
  def change
    create_table :simple_pages do |t|
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
