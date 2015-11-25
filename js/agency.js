/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});






$(".modalex").click(function () {
    var video = $("#kleenex1").attr("https://www.youtube.com/embed/WxtziXiMHUE");
    
    $("#kleenex1").attr("src","");
    $("#kleenex1").attr("src","https://www.youtube.com/embed/WxtziXiMHUE");
});





$(".modalex").click(function () {
    var video = $("#flashvo").attr("https://www.youtube.com/embed/sw_SA90NXUA");
    
    $("#flashvo").attr("src","");
    $("#flashvo").attr("src","https://www.youtube.com/embed/sw_SA90NXUA");
});







$(".modalex").click(function () {
    var video = $("mtvcountdown").attr("https://www.youtube.com/embed/XPeNhSeKAnM");
    
    $("mtvcountdown").attr("src","");
    $("mtvcountdown").attr("src","https://www.youtube.com/embed/XPeNhSeKAnM");
});