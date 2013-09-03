class WidgetLoadersController < ApplicationController

  def load_widget
    puts params
    html = '<h1>Hola Mundo</h1>'
    render js: params[:callback] + "(#{{ html: html }.to_json})"
  end

end
