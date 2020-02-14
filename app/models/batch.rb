class Batch < ApplicationRecord
    has_many :tickets,
    class_name: "Ticket",
    foreign_key: :batch_id
end
