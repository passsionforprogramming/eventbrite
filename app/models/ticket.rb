class Ticket < ApplicationRecord
    belongs_to :batch,
    class_name: 'Batch',
    foreign_key: :batch_id

    belongs_to :owner,
    class_name: 'User',
    foreign_key: :owner_id

    belongs_to :event,
    class_name: 'Event',
    foreign_key: :event_id
end
