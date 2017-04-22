// Write your Javascript code.

var browser = detectIE();
if (browser === false) { }
else {
    window.location = "https://www.google.ru/chrome/browser/desktop/";
}

function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}


$(document).ready(function () {
    $('#fullpage').fullpage({
        scrollingSpeed: 1200,
        anchors:['main','readMore']
    });
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
});
        
$(document).ready(function () {
    $("body").css('height', (window).innerHeight);
    $("#row1").css('height', (window).innerHeight / 3);
    $("bg").css('height', (window).innerHeight);
    $("#row2").css('height', ((window).innerHeight / 3) * 2);
    $("#row3").css('height', ((window).innerHeight / 2)-83);
    $("#row4").css('height', (window).innerHeight / 2);
});
$(function () {
    $(window).resize(function () {
        $("body").css('height', (window).innerHeight);
        $("#row1").css('height', (window).innerHeight / 3);
        $("bg").css('height', (window).innerHeight);
        $("#row2").css('height', ((window).innerHeight / 3) * 2);
        $("#row3").css('height', ((window).innerHeight / 2) - 83);
        $("#row4").css('height', (window).innerHeight / 2);
    })
})

  
