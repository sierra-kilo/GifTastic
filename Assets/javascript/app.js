
// original button list
var btnList = ['game of thrones', 'the walking dead', 'firefly', 'star trek', 'doctor who', 'supernatural', 'xena', 'x-files', 'quantum leap', 'futurama', 'stranger things', 'lost'];

// create button
function createButton (tvShow) {
    var $button = $('<button><span>' + tvShow + '</span>');
    $button.addClass("btn btn-default showBtn")
    $button.attr('label', tvShow);
    $button.val(tvShow);

    $('.buttons-display').append($button);
    console.log($button);
}

// loop through btnList and make buttons
function originalButtons() {
    for (var i = 0; i<btnList.length; i++) {
    createButton(btnList[i])
    }
}

// get input value and create new button and clear input value
function newButton() {
    tvShow = ($('#newShow').val());
    createButton(tvShow);
    $('#newShow').val('');
    $('#newShow').attr('placeholder', 'New Show');
}

function loadStills(tvShow) {
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });

}

// Example queryURL for Giphy API
// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + $btnValue + "&api_key=YOUR_API_KEY&limit=10";

$.ajax({
    url: queryURL,
    method: 'GET'
}).done(function(response) {
    console.log(response);

    // set original buttons
    originalButtons();

    // add new button
    $('#add').click(function() {
        newButton();
    });

    // load content on click of one of tvshow buttons
    $(".buttons-display").on('click','.showBtn', function() {
        var $btnValue = $(this).val();

        $(".gif-display").html('<img src="' + response.data[0].bitly_url + '" alt="gif">' );

      var $image = $("<img>");

      $image.attr("src", imageUrl);
      $image.attr("alt", "image");

      $(".gif-display").html($image);
    });




    // var imageUrl = response.data[1].images.fixed_height_small_still.url;




});
