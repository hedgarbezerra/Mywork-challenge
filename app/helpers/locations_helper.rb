module LocationsHelper
	def locToJson
		@locations = Location.all.as_json.to_json			
	end
	
end
