$(function(){
    $("#bg").hide();

    $("#alclick").click(function(){
        $("#bg").fadeIn(300);
    });
    $("#ok").click(function(){
        $("#bg").fadeOut(300);
    })
})