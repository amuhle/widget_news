class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages, as_relation_superclass: true do |t|
      t.integer :number
      t.string :title
      t.string :type
      t.belongs_to :widget

      t.timestamps
    end
  end
end
