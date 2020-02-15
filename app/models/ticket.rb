require 'securerandom'
class Ticket < ApplicationRecord
    after_initialize :generate_ticket_code
    belongs_to :batch,
    class_name: 'Batch',
    foreign_key: :batch_id

    belongs_to :owner,
    class_name: 'User',
    foreign_key: :owner_id

    belongs_to :event,
    class_name: 'Event',
    foreign_key: :event_id

    def generate_ticket_code
        self.ticket_code = SecureRandom.uuid
    end
end
