FactoryGirl.define do 
	factory :comment do 
		user  
		project 
		content { Faker::Lorem.sentence(3) } 
	end
end
