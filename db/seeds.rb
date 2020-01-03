# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'faker'

eventTypes = [
    "Type",
    "Appearance or Signing",
    "Attraction",
    "Camp, Trip, or Retreat",
    "Class, Training, or Workshop",
    "Concert, or Performance",
    "Conference",
    "Convention",
    "Dinner or Gala",
    "Festival or Fair",
    "Game or Competition",
    "Meeting or Networking Event",
    "Other",
    "Party or Social Gathering",
    "Race or Endurance Event",
    "Rally",
    "Screening",
    "Seminar or Talk",
    "Tour",
    "Tournament",
    "Tradeshow, Consumer Show, or Expo"
]

eventCategories = [
    "Category",
    "Auto, Boat and Air",
    "Business & Professional",
    "Charity & Causes",
    "Community & Culture",
    "Family & Education",
    "Fashion and Beauty",
    "Film, Media, & Entertainment",
    "Food & Drink",
    "Government & Politics",
    "Health & Wellness",
    "Hobbies & Special Interest",
    "Home & Lifestyle",
    "Music",
    "Other",
    "Performing & Visual Arts",
    "Religion & Spirituality",
    "School Activities",
    "Science & Technology",
    "Seasonal & Holiday",
    "Sports & Fitness",
    "Travel & Outdoor"
]

demoUser = User.create(
    first_name: "Barry",
    last_name: "Allen",
    password: "123456",
    email: "barryallen@haply.com"
)

10.times do 
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        password: "123456"
    )
end

100.times do
    i = 1
    demoEvent = Event.create(
        title: Faker::Movies::LordOfTheRings.location,
        user_id: rand(1..10),
        category: eventCategories.sample,
        eventType: eventTypes.sample,
        location_address: Faker::Address.full_address,
        organizer: Faker::Name.name,
        lat: Faker::Address.latitude,
        lon: Faker::Address.longitude,
        location_type: "venue",
        start_time: Faker::Time.between(from: DateTime.now + 8, to: DateTime.now + 15, format: :default),
        description: Faker::GreekPhilosophers.quote)
        file = open("https://haply-seed.s3.us-east-2.amazonaws.com/#{rand(1..9)}.jpg")
    demoEvent.photo.attach(io: file, filename: "event_image#{i}.jpg")
    i += 1
end

20.times do
    i = 1
    Like.create(user_id: 1, event_id: i)
    i += 1
end
