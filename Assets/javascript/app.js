// Example queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

// original button list
var btnList = ['game of thrones', 'the walking dead', 'firefly', 'star trek', 'doctor who', 'supernatural', 'xena', 'x-files', 'quantum leap', 'futurama', 'stranger things', 'lost'];

// create button
function createButton (tvShow) {
    var $button = $('<button><span>' + tvShow + '</span>');
    $button.addClass('class="btn btn-primary"')
    $button.attr('label', tvShow);
    $button.attr('val', tvShow);

    $('.buttons-display').append($button);
    console.log($button);
}

function originalButtons() {
    for (var i = 0; i<btnList.length; i++) {
    createButton(btnList[i])
    }
}


$.ajax({
    url: queryURL,
    method: 'GET'
}).done(function(response) {
    console.log(response);

    // set original buttons
    originalButtons();

    // add new button
    $('#add').click(function() {
        tvShow = ($('#newShow').val());
        createButton(tvShow);
        $('.form-control')[0].reset();
        });
    });


 //   $(".gif-display").html('<img src="' + response.data[0].bitly_url
 // + '" alt="gif">' );

    // var imageUrl = response.data[1].images.fixed_height_small_still.url;
    // var $image = $("<img>");
    //
    // $image.attr("src", imageUrl);
    // $image.attr("alt", "image");
    //
    // $(".gif-display").html($image);



});
