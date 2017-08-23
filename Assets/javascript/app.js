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
    $image.data(2);

    $(".gif-display").html($image);
    var imageUrl = response.data[2].images.fixed_height_small_still.url;
    var $image2 = $("<img>");

    $image2.attr("src", imageUrl);
    $image2.attr("alt", "image2");

    $(".gif-display").append($image2);

    $('img').click(function () {
        var $gif = $('<img src="' + response.data[2].images.fixed_height_small_still.url + '">');
        $('lightbox-content').append($gif);
    });
});


    // <div class='lightbox-content'>
    //     <img src="image.png">
    //     <div class="lightbox-caption"><p>Your caption here</p></div>
