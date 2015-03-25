FactoryGirl.define do 
	factory :user do 
		email { Faker::Internet.email } 
		provider {Faker::Name.name}
		password { Faker::Internet.password(8) } 
		password_confirmation { password } 
    uid {Faker::Number.digit}
		
		factory :confirmed_user do 
			confirmed_at Time.zone.now 
		end
	end
end