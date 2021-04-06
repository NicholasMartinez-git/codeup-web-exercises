"use strict";

$(document).ready(function() {

    $("h1").click(function () {
       $("h1").css("background", "rebeccapurple");
    });

    $("p").dblclick(function (e) {
        $(this).css("font-size", "18px");
    });

    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

});