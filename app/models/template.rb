class Template < ActiveRecord::Base
  # Has a template for building the widget
  has_many :widgets
end
