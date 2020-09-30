
$(document).ready(function(){

    $("#semana1").hide();
    $("#semana2").hide();
    $("#semana3").hide();
    $("#semana4").hide();
    $("#primerasemana").click(function(){
      $("#semana1").show("slow");
      $("#semanitas").hide();
    });

    $(".show-btn").click(function(){
      $("#semanitas").show();
      $("#semana1").hide();
    });
    $("#segundasemana").click(function(){
        $("#semana2").show("slow");
        $("#semanitas").hide();
    });
    $(".show-btn").click(function(){
        $("#semanitas").show();
        $("#semana2").hide();
    });
    $("#tercerasemana").click(function(){
        $("#semana3").show("slow");
        $("#semanitas").hide();
    });
    $(".show-btn").click(function(){
        $("#semanitas").show();
        $("#semana3").hide();
    });
    $("#cuartasemana").click(function(){
        $("#semana4").show("slow");
        $("#semanitas").hide();
    });
    $(".show-btn").click(function(){
        $("#semanitas").show();
        $("#semana4").hide();
    });
});
//  $("#primeraseman").click(function(){
    //  $("#semana1.very-slow").hide(2000);
  //});
