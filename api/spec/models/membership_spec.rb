# spec/models/user_spec.rb

require 'spec_helper'

describe Membership do
  before do
    @membership = FactoryGirl.build(:membership)
  end
  
  it "has a valid factory" do
    FactoryGirl.create(:membership).should be_valid
  end
end