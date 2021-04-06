"use strict";

$(document).ready(function() {

    $("h1").click(function () {
       $("h1").css("background", "rebeccapurple");
    });

    $("p").click(function (e) {
        $(this).css("font-size", "18px");
    });

    $("p").dblclick(function (e) {
        $(this).html("Howdy!");
    });

    $("p").hover(
        function() {
            var value = $(this).html();
            $(this).html(value.toUpperCase());
        },
        function() {
            var value = $(this).html();
            $(this).html(value.toLowerCase());
        }
    );

    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

    $("#footer").click(function(){
        $(this).hide();
    });

});