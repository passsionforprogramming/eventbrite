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

ActiveRecord::Schema.define(version: 2019_12_30_233626) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "events", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.string "category"
    t.string "type"
    t.string "organizer"
    t.datetime "start_time"
    t.datetime "end_time"
    t.boolean "display_start_time"
    t.boolean "display_end_time"
    t.string "timezone"
    t.string "image_url"
    t.text "description"
    t.boolean "published"
    t.string "status"
    t.float "sold"
    t.float "gross"
    t.integer "views"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location_address", null: false
    t.string "location_type"
    t.float "lat"
    t.float "lon"
    t.string "venue"
    t.index ["end_time"], name: "index_events_on_end_time"
    t.index ["lat"], name: "index_events_on_lat"
    t.index ["lon"], name: "index_events_on_lon"
    t.index ["start_time"], name: "index_events_on_start_time"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
