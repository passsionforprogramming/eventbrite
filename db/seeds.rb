# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'faker'
require 'geocoder'
require 'httparty'
require 'securerandom'

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

dallas_locations = [{lat: 32.9600796, lon: -97.0101134}, { lat: 32.8203525, lon: -97.011731 }, {lat: 33.0807655, lon: -96.8287174}, {lat: 32.9536795, lon: -96.8302922}, {lat: 32.7886951, lon: -97.3474424}, {lat: 32.9134561, lon: -97.335023}]

10.times do 
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        password: "123456"
    )
end

dallas_locations.each do |location|
    response = HTTParty.get("https://atlas.microsoft.com/search/nearby/json?subscription-key=NdvdzeRaZF7wv2CCOGGao3eelC28YASCvSW5k1Blhy0&api-version=1.0&lat=#{location[:lat]}&lon=#{location[:lon]}&limit=100&radius=50000")
    body = JSON.parse response.body
    results = body["results"]
    results.each do |result|
            # puts result["address"]["freeformAddress"]
            # puts result["position"]["lat"]
            # puts result["position"]["lon"]
        next if Event.exists?(location_address: result["address"]["freeformAddress"])
        demoEvent = Event.create(
        title: Faker::Movies::LordOfTheRings.location,
        user_id: rand(1..10),
        category: eventCategories.sample,
        eventType: eventTypes.sample,
        location_address: result["address"]["freeformAddress"],
        organizer: Faker::Name.name,
        maps_lat: result["position"]["lat"],
        maps_lon: result["position"]["lon"],
        lat_lon: "POINT(#{result['position']['lon']} #{result['position']['lat']})",
        published: true,
        location_type: "venue",
        status: "published",
        start_time: Faker::Time.between(from: DateTime.now + 10.days, to: DateTime.now + 120.days, format: :default),
        description: Faker::GreekPhilosophers.quote)
        file = open("https://haply-seed.s3.us-east-2.amazonaws.com/#{rand(1..9)}.jpg")
        demoEvent.photo.attach(io: file, filename: "event_image#{SecureRandom.uuid}.jpg")
    end
end


20.times do
    i = 1
    Like.create(user_id: 1, event_id: i)
    i += 1
end
