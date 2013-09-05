class WidgetsController < ApplicationController

  layout false

  def load_widget
    html = render_to_string(:index) || '<h1>No hay HTML</h1>'
    render js: params[:callback] + "(#{{ html: html }.to_json})"
  end

end
