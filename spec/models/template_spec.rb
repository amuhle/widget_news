require 'spec_helper'

describe Template do

  describe "#create" do

    let(:invalid_attributes) { {first_name: "John", last_name: "Lennon"} }
    let(:valid_attributes) { {first_name: "John", last_name: "Lennon", birthday: Time.now - 50.years, email: 'john@gmail.com' } }

    it "creates a template with all attributes" do
      expect{ Person.create(valid_attributes) }.to change{ Person.count }.by(1)
    end

    it "doesn't create a template if are not all attributes" do
      expect{ Person.create(invalid_attributes) }.not_to change{ Person.count }.by(1)
    end
  end
end