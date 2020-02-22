class Batch < ApplicationRecord
    has_many :tickets,
    class_name: "Ticket",
    foreign_key: :batch_id,
    dependent: :destroy

    belongs_to :owner,
    class_name: 'User',
    foreign_key: :owner_id

    belongs_to :event,
    class_name: "Event",
    foreign_key: :event_id
end
