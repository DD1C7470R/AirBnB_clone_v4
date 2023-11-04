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
	$.ajax({
		url: 'http://0.0.0.0:5001/api/v1/status/',
		type: 'GET',
		success: function(response) {
			if (response === 'OK') {
				$('#api_status').addClass('available');
			} else {
				$('#api_status').removeClass('available');
			}
		},
		error: function(error) {
			console.error('Error:', error);
			$('#api_status').removeClass('available');
		}
	});

});
