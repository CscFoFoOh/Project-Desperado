FactoryGirl.define do 
	factory :membership do 
		project
		user
		applied_at nil
		invited_at nil
		accepted_at nil
		owner_at nil
	end
end
