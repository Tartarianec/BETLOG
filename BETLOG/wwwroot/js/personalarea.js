$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['main']
    });
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
});

$(document).ready(function () {
    $("body").css('height', (window).innerHeight);   
});
$(function () {
    $(window).resize(function () {
        $("body").css('height', (window).innerHeight);     
    })
})

