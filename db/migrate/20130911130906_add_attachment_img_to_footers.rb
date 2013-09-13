class AddAttachmentImgToFooters < ActiveRecord::Migration
  def self.up
    change_table :footers do |t|
      t.attachment :img
    end
  end

  def self.down
    drop_attached_file :footers, :img
  end
end
