class CreateHeaders < ActiveRecord::Migration
  def change
    create_table :headers do |t|
      t.string :text
      t.belongs_to :widget

      t.timestamps
    end
  end
end
