json.extract! user, :id, :name, :email, :user_role, :username, :password_digest, :created_at, :updated_at
json.url user_url(user, format: :json)
