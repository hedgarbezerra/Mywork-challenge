module TimetracksHelper

	def ttToJson
		@timetracks = Timetrack.all.as_json.to_json
				
	end
end
