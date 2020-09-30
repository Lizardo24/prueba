
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

    $("#tercerasemana").click(function(){
        $("#semana3").show("slow");
        $("#semanitas").hide();
    });
    $(".show-btn").click(function(){
        $("#semanitas").show();
        $("#semana3").hide();
    });
});
//  $("#primeraseman").click(function(){
    //  $("#semana1.very-slow").hide(2000);
  //});
