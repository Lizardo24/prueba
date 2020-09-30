
$(document).ready(function(){
    // Hide displayed paragraphs with different speeds
    $("#semana3").hide();
    $("#primerasemana").click(function(){
        $("p.normal").hide();
        $("p.fast").hide("fast");
        $("p.slow").hide("slow");
        $("p.very-fast").hide(50);
        $("p.very-slow").hide(2000);
    });

    // Show hidden paragraphs with different speeds
    $(".show-btn").click(function(){
        $("p.normal").show();
        $("p.fast").show("fast");
        $("p.slow").show("slow");
        $("p.very-fast").show(50);
        $("p.very-slow").show(2000);
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
