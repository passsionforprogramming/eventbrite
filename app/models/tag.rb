class Tag < ApplicationRecord
    validates :name, presence: true
    
    belongs_to :event,
    class_name: 'Event',
    foreign_key: :event_id
end
