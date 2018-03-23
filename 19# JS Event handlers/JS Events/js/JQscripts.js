$(function() {
    $("#Test").click(function () {
        alert("Test  button was clicked");
    });

    $('body').on('click', '.btn', function() {
        alert("nesvarbu koks mygtukas, vistiek veiks!");
    });
});