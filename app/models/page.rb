class Page < ActiveRecord::Base
  acts_as_superclass
  belongs_to :widget
end
