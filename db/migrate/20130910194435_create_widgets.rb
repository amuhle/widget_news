class CreateWidgets < ActiveRecord::Migration
  def change
    create_table :widgets do |t|
      t.string :uuid
      t.belongs_to :template

      t.timestamps
    end
  end
end
