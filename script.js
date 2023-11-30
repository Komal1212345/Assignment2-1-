$(document).ready(function () {
    // Draggable
    $("#draggable").draggable();

    // Droppable
    $("#droppable").droppable({
        drop: function (event, ui) {
            // Handle drop event
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });

    // Resizable
    $("#resizable").resizable();

    // Selectable
    $("#selectable").selectable();

    // Accordion
    $("#accordion").accordion();

    // Autocomplete
    var availableTags = ["Option 1", "Option 2", "Option 3"];
    $("#autocomplete").autocomplete({
        source: availableTags
    });

    // Datepicker
    $("#datepicker").datepicker();

    // Slider
    $("#slider").slider();

    // Show & Hide
    $("#showHideButton").click(function () {
        $("#showHideTarget").toggle("slow");
    });

    // Explode
    $("#explodeButton").click(function () {
        $("#explodeTarget").effect("explode");
    });

    // Fade-in & Fade-out
    $("#fadeButton").click(function () {
        $("#fadeTarget").fadeToggle("slow");
    });

    // Color Animation
    $("#colorAnimateButton").click(function () {
        $("#colorAnimateTarget").animate({
            backgroundColor: "blue",
            color: "white"
        }, 1000);
    });
});
