
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

originalButtons();
// Adding click event listen listener to all buttons
$("button").on("click", function() {
    // Grabbing and storing the tvshow value property value from the button
    // set original buttons

    var $btnValue = $(this).val()

    // Constructing a queryURL using the animal name
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    $btnValue + "&api_key=dc6zaTOxFJmzC&limit=5";

  // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);



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

    // After data comes back from the request

    });
})
