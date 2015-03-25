object false

node :errors do
    @project.errors.map do |attr, err|
        { attribute: attr, message: err }
    end
end