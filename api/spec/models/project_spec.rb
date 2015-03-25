# spec/models/user_spec.rb

require 'spec_helper'

describe Project do
  before do
    @project = FactoryGirl.build(:project)
  end

  it "has a valid factory" do
    FactoryGirl.create(:project).should be_valid
  end
end