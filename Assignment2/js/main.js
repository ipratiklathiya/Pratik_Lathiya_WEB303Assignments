// WEB303 Assignment 2
$(document).ready(function(){
    $("#prospect").click(function(){
    $('div#content').load("prospect.html").hide().fadeToggle(2500);
    });
    $("#convert").click(function(){
    $('div#content').load("convert.html").hide().fadeToggle(2500);
    });
    $("#retain").click(function(){
    $('div#content').load("retain.html").hide().fadeToggle(2500);
    });
});

