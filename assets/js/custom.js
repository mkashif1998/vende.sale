$(document).ready(function () {
    $(".tab_detail_1").hide();
    $(".tab_detail_2").hide();
    $(".tab_detail_3").hide();
    $(".tab_detail_4").hide();
    $(".tab_detail_5").hide();
    $(".tab_detail_6").hide();

    $(".container_line2").hide();

    $(".tab_btn_1").click(function () {
        $(".tab_detail_1").fadeIn("slow").show();
        $(".tab_detail_2").fadeIn("slow").hide();
        $(".tab_detail_3").fadeIn("slow").hide();
        $(".tab_detail_4").fadeIn("slow").hide();
        $(".tab_detail_5").fadeIn("slow").hide();
        $(".tab_detail_6").fadeIn("slow").hide();
        $(".container_line").show();
        $(".container_line2").hide();
        $(".line_1").hide();
        $(".line_2").show();
    });
    $(".tab_btn_2").click(function () {
        $(".tab_detail_1").fadeIn("slow").hide();
        $(".tab_detail_2").fadeIn("slow").show();
        $(".tab_detail_3").fadeIn("slow").hide();
        $(".tab_detail_4").fadeIn("slow").hide();
        $(".tab_detail_5").fadeIn("slow").hide();
        $(".tab_detail_6").fadeIn("slow").hide();
        $(".container_line").show();
        $(".container_line2").hide();
        $(".line_3").hide();
        $(".line_4").show();
    });
    $(".tab_btn_3").click(function () {
        $(".tab_detail_1").fadeIn("slow").hide();
        $(".tab_detail_2").fadeIn("slow").hide();
        $(".tab_detail_3").fadeIn("slow").show();
        $(".tab_detail_4").fadeIn("slow").hide();
        $(".tab_detail_5").fadeIn("slow").hide();
        $(".tab_detail_6").fadeIn("slow").hide();
        $(".container_line").show();
        $(".container_line2").hide();
        $(".line_5").hide();
        $(".line_6").show();
    });
    $(".tab_btn_4").click(function () {
        $(".tab_detail_1").fadeIn("slow").hide();
        $(".tab_detail_2").fadeIn("slow").hide();
        $(".tab_detail_3").fadeIn("slow").hide();
        $(".tab_detail_4").fadeIn("slow").show();
        $(".tab_detail_5").fadeIn("slow").hide();
        $(".tab_detail_6").fadeIn("slow").hide();
        $(".container_line").show();
        $(".container_line2").hide();
        $(".line_7").hide();
        $(".line_8").show();
    });
    $(".tab_btn_5").click(function () {
        $(".tab_detail_1").fadeIn("slow").hide();
        $(".tab_detail_2").fadeIn("slow").hide();
        $(".tab_detail_3").fadeIn("slow").hide();
        $(".tab_detail_4").fadeIn("slow").hide();
        $(".tab_detail_5").fadeIn("slow").show();
        $(".tab_detail_6").fadeIn("slow").hide();
        $(".container_line").show();
        $(".container_line2").hide();
        $(".line_9").hide();
        $(".line_10").show();
    });
    $(".tab_btn_6").click(function () {
        $(".tab_detail_1").fadeIn("slow").hide();
        $(".tab_detail_2").fadeIn("slow").hide();
        $(".tab_detail_3").fadeIn("slow").hide();
        $(".tab_detail_4").fadeIn("slow").hide();
        $(".tab_detail_5").fadeIn("slow").hide();
        $(".tab_detail_6").fadeIn("slow").show();
        $(".container_line").show();
        $(".container_line2").hide();
        $(".line_11").hide();
        $(".line_12").show();
    });
});
AOS.init({
    offset: 300,
    duration: 1000,
});

var string = "The most product driven point of sale system.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
    try {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 120);
    } catch (err) {}
})();

// vars
'use strict'

try {
    var testim = document.getElementById("testim"),
        testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
        testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
        testimLeftArrow = document.getElementById("left-arrow"),
        testimRightArrow = document.getElementById("right-arrow"),
        testimSpeed = 4500,
        currentSlide = 0,
        currentActive = 0,
        testimTimer,
        touchStartPos,
        touchEndPos,
        touchPosDiff,
        ignoreTouch = 30;
    ;

    window.onload = function () {

        // Testim Script
        function playSlide(slide) {
            for (var k = 0; k < testimDots.length; k++) {
                testimContent[k].classList.remove("active");
                testimContent[k].classList.remove("inactive");
                testimDots[k].classList.remove("active");
            }

            if (slide < 0) {
                slide = currentSlide = testimContent.length - 1;
            }

            if (slide > testimContent.length - 1) {
                slide = currentSlide = 0;
            }

            if (currentActive != currentSlide) {
                testimContent[currentActive].classList.add("inactive");
            }
            testimContent[slide].classList.add("active");
            testimDots[slide].classList.add("active");

            currentActive = currentSlide;

            clearTimeout(testimTimer);
            testimTimer = setTimeout(function () {
                playSlide(currentSlide += 1);
            }, testimSpeed)
        }

        testimLeftArrow.addEventListener("click", function () {
            playSlide(currentSlide -= 1);
        })

        testimRightArrow.addEventListener("click", function () {
            playSlide(currentSlide += 1);
        })

        for (var l = 0; l < testimDots.length; l++) {
            testimDots[l].addEventListener("click", function () {
                playSlide(currentSlide = testimDots.indexOf(this));
            })
        }

        playSlide(currentSlide);

        // keyboard shortcuts
        document.addEventListener("keyup", function (e) {
            switch (e.keyCode) {
                case 37:
                    testimLeftArrow.click();
                    break;

                case 39:
                    testimRightArrow.click();
                    break;

                case 39:
                    testimRightArrow.click();
                    break;

                default:
                    break;
            }
        })

        testim.addEventListener("touchstart", function (e) {
            touchStartPos = e.changedTouches[0].clientX;
        })

        testim.addEventListener("touchend", function (e) {
            touchEndPos = e.changedTouches[0].clientX;

            touchPosDiff = touchStartPos - touchEndPos;

            console.log(touchPosDiff);
            console.log(touchStartPos);
            console.log(touchEndPos);


            if (touchPosDiff > 0 + ignoreTouch) {
                testimLeftArrow.click();
            } else if (touchPosDiff < 0 - ignoreTouch) {
                testimRightArrow.click();
            } else {
                return;
            }

        })
    }
} catch (err) {

}

function mobilefunct(x) {
    if (x.matches) { // If media query matches
        $("#demo-link").attr("href", "http://posrooted.epizy.com/");
    } else {
        $("#demo-link").attr("href", "live-demo.html");
    }
}

var x = window.matchMedia("(max-width: 900px)")
mobilefunct(x) // Call listener function at run time
x.addListener(mobilefunct) // Attach listener function on state changes



