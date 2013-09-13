class Widget < ActiveRecord::Base

  # Has a template for building the widget
  has_one :template

  # One widget contains a 'Header', some 'Pages' as 'Content' and a 'Footer'
  has_one :header
  has_many :pages, as: :content, dependent: :destroy
  has_one :footer
end
