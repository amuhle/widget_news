class WidgetLoadersController < ApplicationController

  def load_widget

    file = File.read(File.join('spec', 'fixtures', 'index.html'))
    html = file || '<h1>No hay HTML</h1>'
    a = render js: params[:callback] + "(#{{ html: html }.to_json})"
    puts a
  end

end
