/*
    Module functions
*/

/**
 * Sidebar on the left side of the screen.
 * Has an arrow to slide content out and back in.
 * Supports links and dropdown with sub-sections.
 * If sidebar is in "hidden" mode, the links are not clickable.
 * a body margin is worked into the page to have the body still centered in the leftover space.
**/
function loadSidebar() {
    // Load the html page "sidebar.html" into an empty tag with id="sidebar" .
    $("#sidebar").load("sidebar.html").on("click", function (event) {
        let target = $(event.target);
        if (target.is("a")){
            // do the normal link action.
        } else {
            $('#sidebar').toggleClass('active');
            $(".sidebar__nav__section").fadeToggle();
            $(".sidebar__nav__arrow").fadeToggle();
        }
    });
}


/*
    General javascript
*/



/*
   Initialize module functions
*/
// When document is ready, initiate function below.
$(function () {
    loadSidebar();

});