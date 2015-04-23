# spec/models/user_spec.rb

require 'spec_helper'

describe Project do
  before do
    @project = FactoryGirl.build(:project)
  end

  it "has a valid factory" do
    FactoryGirl.create(:project).should be_valid
  end

  it 'has many members' do 
    @project.memberships << FactoryGirl.create(:membership)
    @project.save
    expect(@project.memberships.count).to eq(1)
    @project.memberships << FactoryGirl.create(:membership)
    @project.save
    expect(@project.memberships.count).to eq(2)
    @project.memberships << FactoryGirl.create(:membership)
    @project.save
    expect(@project.memberships.count).to eq(3)
  end 

  it 'can filter on invitations to project' do
    expect(@project.invitations.count).to eq(0)
    @project.memberships << FactoryGirl.create(:invitation)
    @project.save
    expect(@project.invitations.count).to eq(1)
    @project.memberships << FactoryGirl.create(:invitation)
    @project.save
    expect(@project.invitations.count).to eq(2)
    @project.memberships << FactoryGirl.create(:invitation)
    @project.save
    expect(@project.invitations.count).to eq(3)
  end

  it 'can filter on applications to project' do
    expect(@project.applications.count).to eq(0)
    @project.memberships << FactoryGirl.create(:application)
    @project.save
    expect(@project.applications.count).to eq(1)
    @project.memberships << FactoryGirl.create(:application)
    @project.save
    expect(@project.applications.count).to eq(2)
    @project.memberships << FactoryGirl.create(:application)
    @project.save
    expect(@project.applications.count).to eq(3)
  end

  it 'can have an owner' do 
    mem = FactoryGirl.create(:membership)
    mem.owner_at = Time.now
    @project.memberships << mem
    @project.save
    expect(@project.owner).to eq(mem.user)
  end 

  it 'only has one owner' do 
    mem = FactoryGirl.create(:membership)
    mem.owner_at = Time.now
    @project.memberships << mem
    memtwo = FactoryGirl.create(:membership)
    memtwo.owner_at = Time.now
    @project.memberships << memtwo
    @project.save
    expect(@project.owner).to eq(mem.user)
  end

  it 'returns nil for no owner' do
    expect(@project.owner).to eq(nil)
  end
end