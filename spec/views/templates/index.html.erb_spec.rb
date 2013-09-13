require 'spec_helper'

describe "templates/index" do
  before(:each) do
    assign(:templates, [
      stub_model(Template,
        :name => "Name",
        :description => "Description",
        :content => "Content"
      ),
      stub_model(Template,
        :name => "Name",
        :description => "Description",
        :content => "Content"
      )
    ])
  end

  it "renders a list of templates" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Description".to_s, :count => 2
    assert_select "tr>td", :text => "Content".to_s, :count => 2
  end
end
