class DesignersController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :about, :contact]

  # GET /designers/new
  def new
    new_widget = Widget.new
    self.widget = new_widget
  end

  #
  def layout_choose
    @templates = Template.all
    render layout: false
  end

  def content_choose

    @pages = Template.all

    if params['template_id'] then
      template = Template.find(params['template_id'])
      self.widget.template = template
    else

    end

    render layout: false, partial: 'content_choose'
  end

  def widget_content_type
    render layout: false, partial: 'widget_content_type'
  end

  def get_widget
    render layout: false, partial: 'get_widget'
  end

  protected

  def widget=(some_widget)
    session['widget'] = some_widget
  end

  def widget
    session['widget']
  end
end
