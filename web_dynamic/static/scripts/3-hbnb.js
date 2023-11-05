$(function() {
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
				if (response.status === 'OK') {
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

		$.ajax({
			type: 'POST',
			data: JSON.stringify({}),
			headers: {
				'Content-Type': 'application/json'
			},
			url: 'http://0.0.0.0:5001/api/v1/places_search',
			success: function(data) {
				$.each(data, function(idx, place){
					$('.places').append(
						'<article>' +
						  '<div class="title_box">' +
						  '<h2>' + place.name + '</h2>' +
						  '<div class="price_by_night">' + place.price_by_night +
						  '</div>' +
						  '</div>' +
						  '<div class="information">' +
						  '<div class="max_guest">' +
						  '<br />' + place.max_guest + ' Guests' +
						  '</div>' +
						  '<div class="number_rooms">' +
						  '<br />' + place.number_rooms + ' Bedrooms' +
						  '</div>' +
						  '<div class="number_bathrooms">' +
						  '<br />' + place.number_bathrooms + ' Bathroom' +
						  '</div>' +
						  '</div>' +
						  '<div class="description">' + place.description +
						  '</div>' +
						  '</article>');
				});
			}
		})

	})
})

