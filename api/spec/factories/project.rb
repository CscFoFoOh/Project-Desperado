FactoryGirl.define do 
	factory :project do 
		name { Faker::App.name }
 		description { Faker::Lorem.paragraph }
 		user
		closed_at nil
		ended_at nil 
	end
end
