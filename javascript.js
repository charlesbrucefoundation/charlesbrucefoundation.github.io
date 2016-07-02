
//keep nav stuck to top
/*
$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#nav');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'absolute',
                top: 950
            });
            isFixed = false;
        }
    });
});
*/

//hover for boxes
//$(document).ready(function() {
//    $(".box").hover(function()
//        { $(this).toggleClass('boxHover'); });
//});

//hover for buttons
$(document).ready(function() {
    $(".button").hover(function()
        { $(this).toggleClass('buttonHover'); });
});

//hover for box buttons
$(document).ready(function() {
    $(".box_button").hover(function()
        { $(this).toggleClass('boxButtonHover'); });
});

//animate boxes
$(document).ready(function() {
    $(".box").mouseover(function(){
        $(this).stop().animate({opacity: '0.9'}, 350);
    }); 
});
$(document).ready(function() {
    $(".box").mouseout(function(){
        $(this).stop().animate({opacity: '1'}, 350);
    }); 
});

//animate box text appear
var boxTextTriggered = false;
$(window).scroll(function() {
    var a = $("#box1").offset().top;
    var b = $("#box1").height();
    var c = $(window).height();
    var d = $(window).scrollTop();
    if ((c+d)>(a+b) && !boxTextTriggered) {
        //bottom of #box1 has just become visible
        $("#box1_text").animate({opacity: '1'}, 500);
        $("#box2_text").delay(100).animate({opacity: '1'}, 500);
        $("#box3_text").delay(200).animate({opacity: '1'}, 500);
        $("#box4_text").delay(300).animate({opacity: '1'}, 500);
        boxTextTriggered = true;
    }
});

//hover for arrow
$(document).ready(function() {
    $("#arrow").hover(function()
        { $(this).toggleClass('arrowHover'); });
});

//scrolling function for arrow
$(document).ready(function() {
    $("#arrow").click(function() {
        $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1200, "easeOutExpo");
    });
});


//make about us appear when bottom is scrolled past
var aboutTriggered = false;
$(window).scroll(function() {
    var a = $("#about").offset().top;
    var b = $("#about").height();
    var c = $(window).height();
    var d = $(window).scrollTop();
    if ((c+d)>(a+b) && !aboutTriggered) {
        //bottom of #mydiv has just become visible
        $("#aboutText").animate({color: "rgba(0, 0, 0, 1)"}, 500);
        aboutTriggered = true;
    }
});

//keeps nav stretched across
$(window).resize(function() {
    $("#nav").width("100%");
});



function resizeLarge() {
    var border = 25;
    var landHeight = $(window).height();
    var landWidth = $(window).width();
    var logoHeight = 150;
    var logoWidth = 662;
    var logoTop = (.5 * landHeight) - (.5 * logoHeight);
    var arrowHeight = 40;
    var arrowTop = (.95 * landHeight) - arrowHeight;
    var aboutHeight = 400;
    var aboutTop = landHeight + border;
    var aboutTextHeight = $("#whoWeAre").height() + $("#whoBody").height();
    var boxesHeight = 700;
    var boxesTop = aboutTop + aboutHeight + (border);
    var contactHeight = 200;
    var contactTop = boxesTop + boxesHeight;
    var mainHeight = contactTop + contactHeight;

    $("#landImg").css({
        "height": landHeight,
        "width": landWidth
    });
    $("#logo").css({
        "height": logoHeight,
        "width": logoWidth,
        "top": logoTop
    });
    $("#arrow").css({
        "font-size": arrowHeight,
        "top": arrowTop
    });
    $("#about").css({
        "height": aboutHeight,
        "top": aboutTop
    });
    $("#aboutText").css({
        "height": aboutTextHeight
    });
    $("#boxes").css({
        "height": boxesHeight,
        "top": boxesTop
    });
    $("#contact").css({
        "height": contactHeight,
        "top": contactTop
    });
    $("#main").css({
        "height": mainHeight
    });
}

function resizeSmall() {
    var border = 25;
    var landHeight = $(window).height();
    var landWidth = $(window).width();
    var logoHeight = 300;
    var logoTop = (.5 * landHeight) - (.5 * logoHeight);
    var arrowHeight = 40;
    var arrowTop = (.95 * landHeight) - arrowHeight;
    var aboutHeight = 400;
    var aboutTop = landHeight + border;
    var aboutTextHeight = $("#whoWeAre").height() + $("#whoBody").height();
    var boxesHeight = 1400;
    var boxesTop = aboutTop + aboutHeight + (border);
    var contactHeight = 300;
    var contactTop = boxesTop + boxesHeight;
    var mainHeight = contactTop + contactHeight;

    $("#landImg").css({
        "height": landHeight,
        "width": landWidth
    });
    $("#logo").css({
        "height": logoHeight,
        "top": logoTop
    });
    $("#arrow").css({
        "font-size": arrowHeight,
        "top": arrowTop
    });
    $("#about").css({
        "height": aboutHeight,
        "top": aboutTop
    });
    $("#aboutText").css({
        "height": aboutTextHeight
    });
    $("#boxes").css({
        "height": boxesHeight,
        "top": boxesTop
    });
    $("#contact").css({
        "height": contactHeight,
        "top": contactTop
    });
    $("#main").css({
        "height": mainHeight
    });
}

var sizeThreshold = 750;

$(document).ready(function() {
    $(window).resize(function() {
        if ($(window).width() < sizeThreshold) {
        }
    });
});

var large = true;
$(document).ready(function() {
    if ($(window).width() > sizeThreshold) {
        resizeLarge();
        large = true;
    } else {
        $("#style").attr("href", "style_mobile.css");
        $("#news").html("What's New?") //sorry...
        resizeSmall();
        large = false;
    }
});

$(window).resize(function() {
    if (($(window).width() > sizeThreshold) && large) {
        resizeLarge();
    } else if (($(window).width() > sizeThreshold) && !large) {
        $("#style").attr("href", "style.css");
        $("#news").html("What's<br>New?") //sorry...
        resizeLarge();
        large = true;
    } else if (($(window).width() < sizeThreshold) && !large) {
        resizeSmall();
    } else {
        $("#style").attr("href", "style_mobile.css");
        $("#news").html("What's New?") //sorry...
        resizeSmall();
        large = false;
    }
});









