require 'spec_helper'

describe WidgetLoader do

  describe "#loadwidget" do

    let(:widget) { '<div>Hola</div>' }

    it "find a widget " do
      expect{ Person.create(valid_attributes) }.to change{ Person.count }.by(1)
    end

    it "doesn't create a template if are not all attributes" do
      expect{ Person.create(invalid_attributes) }.not_to change{ Person.count }.by(1)
    end
  end
end