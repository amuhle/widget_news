class DesignersController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :about, :contact]

  # GET /designers/new
  def new
    @widget = Widget.new
  end

  def layout_choose
    render :layout => false
  end

  def content_choose
    render :layout => false
  end

  def get_widget
    render :layout => false
  end
end
