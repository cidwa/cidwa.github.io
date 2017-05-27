var consulta = window.matchMedia('(max-width: 1000px)');
var redimension = window.matchMedia('(max-width: 1000px)');
var tam = $(window).width();
var bandera = 1;

$(document).ready(function () {
    particlesJS('particles-js', jsonPuntos);
});

function mediaQuery() {
    if (consulta.matches) {
        $(".primero").click(function () {
            $(".segundo").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".tercero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".mundo").hide("slow");
            $(".logo").hide("slow");
            $(".cuadro").hide("slow");
            $(this).animate({
                "height": "100%"
            }, "slow", function () {
                if (bandera === 1) {
                    particlesJS('particles-js', jsonPuntos);
                    bandera = 0;
                }
            });
            $(".menu").show("slow");
            $(".container").show("slow");
        });
        $(".segundo").click(function () {
            $(".primero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".tercero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".mundo").hide("slow");
            $(".cuadro").hide("slow");
            $(this).animate({
                "height": "100%"
            }, "slow");
            $(".menu").show("slow");
        });
        $(".tercero").click(function () {
            $(".primero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".segundo").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".mundo").hide("slow");
            $(".cuadro").hide("slow");
            $(".logo").hide("slow");
            $(this).animate({
                "height": "100%"
            }, "slow");
            $(".menu").show("slow");
        });
        $(".menu").click(function () {
            $(".primero").animate({
                "height": "33%",
                "min-height": "400px"
            }, "slow", function () {
                $(this).removeAttr("style");
                if (bandera === 0) {
                    particlesJS('particles-js', jsonPuntos);
                    bandera = 1;
                }
            });
            $(".segundo").animate({
                "height": "33%",
                "min-height": "400px"
            }, "slow", function () {
                $(this).removeAttr("style");
            });
            $(".tercero").animate({
                "height": "33%",
                "min-height": "400px"
            }, "slow", function () {
                $(this).removeAttr("style");
            });
            $(".logo").show("slow");
            $(".cuadro").show("slow");
            $(".mundo").show("slow");
            $(".menu").hide("slow");
            $(".container").hide("slow");
        });
        console.log("menor a 800");
    } else {
        $(".primero").click(function () {
            $(".segundo").animate({
                "width": "0%"
            }, "slow");
            $(".tercero").animate({
                "width": "0%"
            }, "slow");
            $(".logo").hide("slow");
            $(".cuadro").hide("slow");
            $(".menu").show("slow");
            $(this).animate({
                "width": "100%"
            }, "slow", function () {
                if (bandera === 1) {
                    particlesJS('particles-js', jsonPuntos);
                    bandera = 0;
                }
            });
            $(".container").show("slow");
        });
        $(".segundo").click(function () {
            $(".primero").animate({
                "width": "0%"
            }, "slow");
            $(".tercero").animate({
                "width": "0%"
            }, "slow");
            $(this).animate({
                "width": "100%"
            }, "slow");
            $(".mundo").hide("slow");
            $(".cuadro").hide("slow");
            $(".menu").show("slow");
        });
        $(".tercero").click(function () {
            $(".primero").animate({
                "width": "0%"
            }, "slow");
            $(".segundo").animate({
                "width": "0%"
            }, "slow");
            $(this).animate({
                "width": "100%"
            }, "slow");
            $(".mundo").hide("slow");
            $(".logo").hide("slow");
            $(".cuadro").hide("slow");
            $(".menu").show("slow");
        });
        $(".menu").click(function () {
            $(".primero").animate({
                "width": "33%"
            }, "slow", function () {
                $(this).removeAttr("style");
                if (bandera === 0) {
                    particlesJS('particles-js', jsonPuntos);
                    bandera = 1;
                }
            });
            $(".segundo").animate({
                "width": "33%"
            }, "slow", function () {
                $(this).removeAttr("style");
            });
            $(".tercero").animate({
                "width": "33%"
            }, "slow", function () {
                $(this).removeAttr("style");
            });
            $(".logo").show("slow");
            $(".cuadro").show("slow");
            $(".mundo").show("slow");
            $(".menu").hide("slow");
            $(".container").hide("slow");
        });
        console.log("mayor a 800");
    }
}

function valorDefecto() {
    if (tam > 1000 && $(window).width() < 1000) {
        location.reload();
    }
    if (tam < 1000 && $(window).width() > 1000) {
        location.reload();
    }
}

consulta.addListener(mediaQuery);
redimension.addListener(valorDefecto);
valorDefecto();
mediaQuery();
