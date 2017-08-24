// Example queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

// original button list
var btnList = ['game of thrones', 'the walking dead', 'firefly', 'star trek', 'doctor who', 'supernatural', 'xena', 'x-files', 'quantum leap', 'futurama', 'stranger things', 'lost'];

// create button
function createButton (tvShow) {
    var $button = $('<button><span>' + tvShow + '</span>');
    $button.addClass("btn btn-default")
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

//////////////////////////scope problem right here i think///////////////// 1 of 2

// get button value
function getBtnValue() {
    var $btnValue = $(this).val();
    console.log($btnValue);
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
        newButton();
    });


//////////////////////////scope problem right here i think///////////////// 2 of 2
    // load content on click of one of tvshow buttons
    $('.btn').click(function() {
        alert(getBtnValue())

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
