class Event < ApplicationRecord
    include PgSearch

    validates :title, :user_id,  presence: true
    belongs_to :user,
    foreign_key: :user_id,
    class_name: "User"

    has_many :tags,
    foreign_key: :event_id,
    class_name: "Tag"

    has_many :likes,
    foreign_key: :event_id,
    class_name: "Like"

    has_many :tickets,
    foreign_key: :event_id,
    class_name: "Ticket"

    has_many :batches,
    foreign_key: :event_id,
    class_name: "Batch",
    dependent: :destroy

    has_one_attached :photo

     pg_search_scope(
    :search,
    against: %i(
      title
      description
      category
      venue
    ),
    using: {
      tsearch: {
        dictionary: "english",
        prefix: true,

      }
    }
  )
    scope :within, -> (latitude, longitude, distance_in_mile = 1) {
    where(%{
     ST_Distance(lat_lon, 'POINT(%f %f)') < %d
    } % [longitude, latitude, distance_in_mile * 1609.34]) # approx
  }
end
