// Example queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
$.ajax({
    url: queryURL,
    method: 'GET'
}).done(function(response) {
    console.log(response);
 //   $(".gif-display").html('<img src="' + response.data[0].bitly_url
 // + '" alt="gif">' );

    var imageUrl = response.data[1].images.fixed_height_small_still.url;
    var $image = $("<img>");

    $image.attr("src", imageUrl);
    $image.attr("alt", "image");

    $(".gif-display").html($image);

});
