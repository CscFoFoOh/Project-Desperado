# spec/models/application.rb

require 'spec_helper'

describe Application do
  before do
    @application = FactoryGirl.build(:application)
  end

  it "has a valid factory" do
    FactoryGirl.create(:application).should be_valid
  end

  it "sets applied_at on create" do 
    @application.applied_at = nil
    @application.save
    expect(@application.applied_at).not_to be_nil  
  end  


end