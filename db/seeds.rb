# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  User.create(name:"Hector",
      username:"hech22",
      password:"weewuuhew",
     	email:"wquhuwqehihweq",
      user_role:1)

    Location.create(
    desc:"Home",
    meters:12,
    longitude:46.354350,
    latitude:-23.944394,
    user_id:1)

    Timetrack.create(
    comment:'Clean up on isle 3',
    longitude:46.354350,
    latitude:-23.944394,
    user_id:1
    )