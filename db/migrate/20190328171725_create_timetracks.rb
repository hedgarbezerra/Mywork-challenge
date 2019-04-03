class CreateTimetracks < ActiveRecord::Migration[5.2]
  def change
    create_table :timetracks do |t|
      t.float :longitude
      t.float :latitude
      t.references :user, foreign_key: true
      t.string :comment
      t.timestamps
    end
  end
end
