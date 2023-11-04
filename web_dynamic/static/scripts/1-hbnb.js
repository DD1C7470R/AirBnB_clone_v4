$(document).ready(function() {
	$("input[type='checkbox']").change(function() {
		var amenitiesList = {};
		$("input[type='checkbox']:checked").each(function() {
			var amenityId = $(this).data('id');
			var amenityName = $(this).data('name');
			amenitiesList[amenityId] = amenityName;
		});

		var amenitiesText = Object.values(amenitiesList).join(', ');
		$(".amenities").find("h4").text(amenitiesText);
	});
});
