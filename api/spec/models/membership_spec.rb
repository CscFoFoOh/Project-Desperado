# spec/models/user_spec.rb

require 'spec_helper'

describe Membership do
  before do
    @membership = FactoryGirl.build(:membership)
  end
  
  it "has a valid factory" do
    FactoryGirl.create(:membership).should be_valid
  end

  it "validates on project" do
    @membership.project = nil; 
    expect(@membership.save).to eq(false) 
  end 

  it "validates on project" do
    @membership.user = nil; 
    expect(@membership.save).to eq(false) 
  end 

  it "can assign a Project to a memebership" do
    p = FactoryGirl.create(:project)
    @membership.project = p;
    expect(@membership.project).to eq(p)
  end 

  it "can assign a Project to a memebership" do
    u = FactoryGirl.create(:user)
    @membership.user = u;
    expect(@membership.user).to eq(u)
  end 
end