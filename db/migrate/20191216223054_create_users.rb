class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :profile_image_url
      t.string :prefix
      t.string :first_name
      t.string :last_name
      t.string :home_phone
      t.string :cell_phone
      t.string :job_title
      t.string :company
      t.string :website
      t.string :blog
      t.string :home_address_1
      t.string :home_address_2
      t.string :home_city
      t.string :home_zip
      t.string :home_country
      t.string :home_state
      t.string :billing_address_1
      t.string :billing_address_2
      t.string :billing_city
      t.string :billing_zip
      t.string :billing_country
      t.string :shipping_address_1
      t.string :shipping_address_2
      t.string :shipping_city
      t.string :shipping_zip
      t.string :shipping_country
      t.string :shipping_state
      t.string :work_address_1
      t.string :work_address_2
      t.string :work_city
      t.string :work_zip
      t.string :work_country
      t.string :work_state
      t.string :interests, array: true, default: []

      t.timestamps
    end
  end
end
