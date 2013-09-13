class DesignersController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :about, :contact]
end
