module ApplicationHelper

	# Returns the full title on a per-page basis.
	def full_title(page_title)
		base_title = "Milestone Resources"
		if page_title.empty?
			base_title
		else
			"#{base_title} | #{page_title}"
		end
	end

	#Returns the full name of a user when a user object is passed through.
	def full_name(user)
		user.first_name + " " + user.last_name
	end
end
