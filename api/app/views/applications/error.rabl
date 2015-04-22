object false

node :errors do
    @invitation.errors.map do |attr, err|
        { attribute: attr, message: err }
    end
end