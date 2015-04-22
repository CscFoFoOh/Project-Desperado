FactoryGirl.define do 
	factory :invitation do 
		project
		user
		applied_at Time.now
		invited_at Time.now
		accepted_at Time.now
		owner_at Time.now
	end
end
