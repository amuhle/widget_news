class AddAttachmentImgToHeaders < ActiveRecord::Migration
  def self.up
    change_table :headers do |t|
      t.attachment :img
    end
  end

  def self.down
    drop_attached_file :headers, :img
  end
end
