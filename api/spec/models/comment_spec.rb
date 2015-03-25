# spec/models/user_spec.rb

require 'spec_helper'

describe Comment do
  before do
    @comment = FactoryGirl.build(:comment)
  end

  it "has a valid factory" do
    FactoryGirl.create(:comment).should be_valid
  end
end