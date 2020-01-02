class Event < ApplicationRecord
    validates :title, :user_id,  presence: true
    belongs_to :user,
    foreign_key: :user_id,
    class_name: "User"

    has_many :tags,
    foreign_key: :event_id,
    class_name: "Tag"

    has_one_attached :photo
end
