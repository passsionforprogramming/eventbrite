# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_16_223054) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "profile_image_url"
    t.string "prefix"
    t.string "first_name"
    t.string "last_name"
    t.string "home_phone"
    t.string "cell_phone"
    t.string "job_title"
    t.string "company"
    t.string "website"
    t.string "blog"
    t.string "home_address_1"
    t.string "home_address_2"
    t.string "home_city"
    t.string "home_zip"
    t.string "home_country"
    t.string "home_state"
    t.string "billing_address_1"
    t.string "billing_address_2"
    t.string "billing_city"
    t.string "billing_zip"
    t.string "billing_country"
    t.string "shipping_address_1"
    t.string "shipping_address_2"
    t.string "shipping_city"
    t.string "shipping_zip"
    t.string "shipping_country"
    t.string "shipping_state"
    t.string "work_address_1"
    t.string "work_address_2"
    t.string "work_city"
    t.string "work_zip"
    t.string "work_country"
    t.string "work_state"
    t.string "interests", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
