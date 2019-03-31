json.extract! timetrack, :id, :longitude, :latitude, :user_id, :created_at, :updated_at
json.url timetrack_url(timetrack, format: :json)
