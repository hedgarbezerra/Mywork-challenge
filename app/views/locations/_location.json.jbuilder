json.extract! location, :id, :desc, :meters, :longitude, :latitude, :user_id, :created_at, :updated_at
json.url location_url(location, format: :json)
