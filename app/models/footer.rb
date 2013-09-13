class Footer < ActiveRecord::Base
  has_attached_file :img
  belongs_to :widget
end
