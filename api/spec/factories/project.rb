FactoryGirl.define do 
	factory :project do 
		name { Faker::App.name }
 		description { Faker::Lorem.paragraph }
 		closed_at Time.now
		ended_at Time.now
	end
end
