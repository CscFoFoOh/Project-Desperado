FactoryGirl.define do 
	factory :user do 
		email { Faker::Internet.email } 
		provider "email"
		password { Faker::Internet.password(8) } 
		password_confirmation { password } 
    uid {|u| u.email}
		first_name {Faker::Name.name}
		last_name {Faker::Name.name}
		factory :confirmed_user do 
			confirmed_at Time.zone.now 
		end
	end
end
