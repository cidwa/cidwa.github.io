var consulta = window.matchMedia('(max-width: 800px)');
consulta.addListener(mediaQuery);
var bandera = 1;

function mediaQuery() {
    if (consulta.matches) {
        ///////////////////////////////////////PANTALLAS DE MENOS DE 800PX//////////////////////////////////////////////
        $(".negro").click(function () {
            $(".verde").animate({
                "height": "0px"
            }, "slow");
            $(".azul").animate({
                "height": "0px"
            }, "slow");
            $(this).animate({
                "height": "1500px"
            }, "slow");
            $(".pestana").fadeIn(1500);
            $(".pestana").css({
                "position": "fixed"
            });
            $(".encabezado2").hide("slow");
            $(".encabezado3").hide("slow");

            if (bandera === 1) {
                $(".mundo1").css('display', 'block');
                $("#otracosa").css('display', 'none');
                console.log('asd');
                particlesJS('particles-js', jsonPuntos);
                var style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = 'body {}';
                document.getElementsByTagName('head')[0].appendChild(style);
                this.stylesheet = document.styleSheets[document.styleSheets.length - 1];
                try {
                    //  console.log('@-webkit-keyframes walkW{from {top: '+$('.lunaP').position().top+'px; left:'+$('.lunaP').position().left+'px}}');
                    this.stylesheet.insertRule('@-webkit-keyframes walkW{to {top: ' + $('.lunaP').position().top + 'px; left:' + $('.lunaP').position().left + 'px},from {top: 1000px; left:10000px}}', this.stylesheet.rules.length);
                    //  this.stylesheet.insertRule('.objetoN{         -webkit-animation: walkW '+velocity+'.0s linear  infinite;}', this.stylesheet.rules.length);
                } catch (e) {};
                velocity -= 5;
                bandera = 0;
            }
        });

        $(".verde").click(function () {
            $(".negro").animate({
                "height": "0px"
            }, "slow");
            $(".azul").animate({
                "height": "0px"
            }, "slow");
            $(this).animate({
                "height": "1500px"
            }, "slow");
            $(".pestana").fadeIn(1500);
            $(".mundo").hide("slow");
            $(".pestana").css({
                "position": "fixed"
            });
            $(".encabezado1").hide("slow");
            $(".encabezado3").hide("slow");
            $(".principal").show("slow");
        });

        $(".azul").click(function () {
            $(".negro").animate({
                "height": "0px"
            }, "slow");
            $(".verde").animate({
                "height": "0px"
            }, "slow");
            $(this).animate({
                "height": "1500px"
            }, "slow");
            $(".pestana").fadeIn(1500);
            $(".mundo").hide("slow");
            $(".engranes").animate({
                "width": "100%"
            }, "slow");
            $(".pestana").css({
                "position": "fixed"
            });
            $(".encabezado1").hide("slow");
            $(".encabezado2").hide("slow");
        });

        $(".pestana").click(function () {
            $(".pestana").hide();
            $(".negro").animate({
                "height": "500px"
            }, "slow");
            $(".verde").animate({
                "height": "500px"
            }, "slow");
            $(".azul").animate({
                "height": "500px"
            }, "slow");
            $(".mundo").show("slow");
            $(".mundo1").css('display', 'none');
            $("#otracosa").css('display', 'block');
            $(".encabezado1").show("slow");
            $(".encabezado2").show("slow");
            $(".encabezado3").show("slow");
            $(".principal").hide("slow");
            
            console.log('asd');
            bandera = 1;
            $(".engranes").animate({
                "width": "0%"
            }, "slow");

        });
        ///////////////////////////////////////PANTALLAS DE MENOS DE 800PX//////////////////////////////////////////////

    } else {

        ///////////////////////////////////////PANTALLAS DE MÁS DE 800PX//////////////////////////////////////////////
        $(".negro").click(function () {

            $(".verde").animate({
                "width": "0%",
                "left": "100%"
            }, "slow");
            $(".azul").animate({
                "width": "0%",
                "left": "100%"
            }, "slow");
            $(this).animate({
                "width": "100%",
                "left": "0%"
            }, "slow");
            $(".pestana").fadeIn(1500);
            $(".encabezado2").hide("slow");
            $(".encabezado3").hide("slow");

            if (bandera === 1) {
                $(".mundo1").css('display', 'block');
                $("#otracosa").css('display', 'none');

                console.log('asd');
                particlesJS('particles-js', jsonPuntos);
                var style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = 'body {}';
                document.getElementsByTagName('head')[0].appendChild(style);
                this.stylesheet = document.styleSheets[document.styleSheets.length - 1];
                try {
                    //  console.log('@-webkit-keyframes walkW{from {top: '+$('.lunaP').position().top+'px; left:'+$('.lunaP').position().left+'px}}');
                    this.stylesheet.insertRule('@-webkit-keyframes walkW{to {top: ' + $('.lunaP').position().top + 'px; left:' + $('.lunaP').position().left + 'px},from {top: 1000px; left:10000px}}', this.stylesheet.rules.length);
                    //  this.stylesheet.insertRule('.objetoN{         -webkit-animation: walkW '+velocity+'.0s linear  infinite;}', this.stylesheet.rules.length);
                } catch (e) {};
                velocity -= 5;
                bandera = 0;
            }
        });

        $(".verde").click(function () {
            if (bandera === 1) {
                $(".negro").animate({
                    "width": "0%",
                    "left": "0%"
                }, "slow");
                $(".azul").animate({
                    "width": "0%",
                    "left": "100%"
                }, "slow");
                $(this).animate({
                    "width": "100%",
                    "left": "0%"
                }, "slow");
                $(".pestana").fadeIn(1500);
                console.log('asd');
                $(".encabezado1").hide("slow");
                $(".encabezado3").hide("slow");
                $(".principal").show("slow");
            }
        });

        $(".azul").click(function () {
            if (bandera === 1) {
                $(".engranes").animate({
                    "width": "100%",
                    "left": "0%"
                }, "slow");
                $(".verde").animate({
                    "width": "0%",
                    "left": "0%"
                }, "slow");
                $(".negro").animate({
                    "width": "0%",
                    "left": "0"
                }, "slow");
                $(this).animate({
                    "width": "100%",
                    "left": "0%"
                }, "slow");
                $(".pestana").fadeIn(1500);
                console.log('asd');
                bandera = 0;
                $(".encabezado1").hide("slow");
                $(".encabezado2").hide("slow");
            }
        });
        var velocity = 23;
        $(document).ready(function () {
            particlesJS('otracosa', jsonPuntos);


        });
        $(".pestana").click(function () {
            $(".pestana").hide();
            $(".negro").animate({
                "width": "33.3%",
                "left": "0%"
            }, "slow");
            $(".verde").animate({
                "width": "33.3%",
                "left": "33.3%"
            }, "slow");
            $(".azul").animate({
                "width": "33.3%",
                "left": "66.6%"
            }, "slow");
            $(".engranes").animate({
                "width": "0%",
                "left": "50%"
            }, "slow");
            $(".mundo1").css('display', 'none');
            $("#otracosa").css('display', 'block');
            console.log('asd');
            bandera = 1;
            $(".encabezado1").show("slow");
            $(".encabezado2").show("slow");
            $(".encabezado3").show("slow");
            $(".principal").hide("slow");
        });
        ///////////////////////////////////////PANTALLAS DE MÁS DE 800PX//////////////////////////////////////////////

    }
}
mediaQuery();




///////////////////////FUNCION PARA LAS HORAS DEL DIA///////////////////////////////////
/*
var fecha = new Date();
var hora = fecha.getHours();

if (hora > 20 || hora <= 6) {
    $(".negro").css('background', '#597e81');
    $(".verde").css('background', '#de516a');
    $(".azul").css('background', '#6f4aa0');
}

if (hora > 6 && hora <= 15) {
    $(".negro").css('background', '#de516a');
    $(".verde").css('background', '#6f4aa0');
    $(".azul").css('background', '#597e81');
}

if (hora > 15 && hora <= 20) {
    $(".negro").css('background', '#6f4aa0');
    $(".verde").css('background', '#597e81');
    $(".azul").css('background', '#de516a');
}
*/
///////////////////////TERMINA  FUNCION PARA LAS HORAS DEL DIA///////////////////////////////////
