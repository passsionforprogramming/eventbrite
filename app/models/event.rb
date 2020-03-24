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

  def self.chain(methods)
    methods.inject(self, :send)
  end

  def self.weekend_array
    arr = []
    fridayDate = Date.parse("Friday")
    sundayDate = fridayDate + 2.days
    arr << fridayDate
    arr << sundayDate
  end

  # def self.chain_method(methods)
  #   methods.inject(self) { |acc, el| acc.send (el.keys.first), el.values.first}
  # end

  scope :date, -> (date){where('start_time < ?', date)}

  scope :dateEquals, -> (date){where(start_time: date)}

  scope :date_between, -> (date){where('start_time < ? AND start_time > ?', date[1], date[0])}

  scope :category_search, -> (category){where(category: category)}
end
