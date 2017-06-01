$(document).ready(function() {

    var flash = {

        show: function() {
            // Hide message when it's clicked on
            $('body').on('click','div', function() {//.delegate('#flash', 'click', function() {
                flash.hide();
            });

            // Display the flash
            $('#flash').slideDown();

            // Clear the timeout if one is set
            //clearTimeout(flash.timeout);

            // Hide the message after 5 seconds
            //flash.timeout = setTimeout(function() {
            //    flash.hide();
            //}, 5000);
        },

        hide: function() {
            // Hide the flash
            $('#flash').slideUp();

            // Clear the timeout if it exists
            //if (flash.timeout) {
            //    clearTimeout(flash.timeout);
            //}
        },

        // Flash message timeout
        //timeout: null
    };

    // Display the flash message
    $('body').append('<div id="flash">Use your arrow keys to navigate.  Click to make this banner go away.</div>')

    flash.show();

});
