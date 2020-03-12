require 'httparty'
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

    # response = https://atlas.microsoft.com/search/nearby/{format}?api-version=1.0&lat={lat}&lon={lon}

    def tester
        response = HTTParty.get("https://atlas.microsoft.com/search/nearby/json?subscription-key=NdvdzeRaZF7wv2CCOGGao3eelC28YASCvSW5k1Blhy0&api-version=1.0&lat=32.8203525&lon=-97.011731&limit=100&radius=50000")
        body = JSON.parse response.body
        # puts body["results"].first["poi"]["name"]
        # puts body["results"].first["address"]["streetNumber"]
        # puts body["results"].first["address"]["streetName"]
        # puts body["results"].first["address"]["municipality"]
        # puts body["results"].first["address"]["countrySubdivision"]
        # puts body["results"].first["address"]["countrySubdivision"]
        # puts body["results"].first["address"]["postalCode"]
        # puts body["results"].first["address"]["countryCode"]
        # puts body["results"].first["address"]["freeformAddress"]
        # puts body["results"].first["position"]["lat"]
        # puts body["results"].first["position"]["lon"]
        body["results"].each do |result|
            puts result["address"]["freeformAddress"]
            puts result["position"]["lat"]
            puts result["position"]["lon"]
        end
        puts "Here is a good place"
    end
    
end
