class CreateVideoclips < ActiveRecord::Migration
  def change
    create_table :videoclips do |t|
      t.string :url
      t.string :title

      t.timestamps
    end
  end
end
