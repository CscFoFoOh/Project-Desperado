FactoryGirl.define do 
	factory :application do 
		project
		user
		invited_at Time.now
		accepted_at Time.now
		owner_at Time.now
	end
end
