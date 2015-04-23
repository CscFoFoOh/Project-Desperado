# spec/models/user_spec.rb

require 'spec_helper'

describe User do
  before do
    @user = FactoryGirl.build(:user)
  end

  it "gets a uid assigned" do
    @user.save!
    expect(@user.uid).not_to be_blank
  end

  it "doesn't send a confirmation email" do
    expect { @user.save! }.not_to change { ActionMailer::Base.deliveries.count }
  end

  it 'returns true or false for admin?' do 
    @user.is_admin = false    
    @user.save
    expect(@user.admin?).to eq(false)
    @user.is_admin = true    
    @user.save
    expect(@user.admin?).to eq(true)
  end

  it 'has a user display name' do 
    expect(@user.full_name).to eq(@user.first_name + " " + @user.last_name)
  end 

  it 'can create 64 bit slug for user' do 
    expect(@user.create_slug.length).to eq(64)
  end

  it 'creates a second slug if users slug already exists' do 
    slug = @user.create_slug
    @user.save
    expect(@user.create_slug).to_not eq(slug)
  end

end