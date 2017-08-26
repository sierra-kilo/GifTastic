// original button list
var btnList = ['game of thrones', 'the walking dead', 'firefly', 'star trek', 'doctor who', 'supernatural', 'xena', 'x-files', 'quantum leap', 'futurama', 'stranger things', 'lost'];

// create button
function createButton (tvShow) {
    var $button = $('<button><span>' + tvShow + '</span>');
    $button.addClass("btn btn-default showBtn")
    $button.attr('label', tvShow);
    $button.val(tvShow);

    $('.buttons-display').append($button);

    // test log
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
    tvShow = ($('#newShow').val().trim());
    createButton(tvShow);
    $('#newShow').val('');
    $('#newShow').attr('placeholder', 'New Show');
}

// A $( document ).ready() block.
$( document ).ready(function() {

    // create original buttons
    originalButtons();

    // create new buttons with input
    $('#add').click(function() {
        newButton();
    });

    // Adding click event listen listener to .showBtn buttons
    $(".buttons-display").on('click','.showBtn', function() {
        $('.gif-display').empty();
        var $btnValue = $(this).val();
        var str = $btnValue;
        $btnValue = str.replace(' ', '+');

        // test log
        console.log($btnValue);

        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $btnValue + "&api_key=dc6zaTOxFJmzC&limit=9";

        $.ajax({
        url: queryURL,
        method: "GET"
        })

        // After data comes back from the request
        .done(function(response) {

            // test log
            console.log(response);

            // test log
            console.log(queryURL);

            // test gif display
            // $(".gif-display").html('<img src="' + response.data[0].images.downsized_still.url + '" alt="gif">' );

            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // loop through responses and display all stills
            for (var i = 0; i < results.length; i++) {
                $(".gif-display").append('<img class="thumb" src="' + results[i].images.downsized_still.url + '" alt="gif">' );
            }

            // test on click play gif


        });
    });
});
