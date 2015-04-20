object false

node :errors do
    @user.errors.map do |attr, err|
        { attribute: attr, message: err }
    end
end