# spec/models/invitation.rb

require 'spec_helper'

describe Invitation do
  before do
    @invitation = FactoryGirl.build(:invitation)
  end

  it "has a valid factory" do
    FactoryGirl.create(:invitation).should be_valid
  end

   it "sets invited_at on create" do 
    @invitation.invited_at = nil
    @invitation.save
    expect(@invitation.invited_at).not_to be_nil  
  end  

end