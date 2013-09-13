class CreateFooters < ActiveRecord::Migration
  def change
    create_table :footers do |t|
      t.string :text
      t.belongs_to :widget

      t.timestamps
    end
  end
end
