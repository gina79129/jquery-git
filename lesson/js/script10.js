$(function(){
    $('#contents div[id != "tab1"]').hide();
    $('ul li:first-child').css("border-bottom","1px solid rgb(168, 159, 231)");
    $("a").click(function(){
        var parli = $(this).parent();
        $("#contents div").hide();
        $("#tabul li").css({"border-bottom":"1px solid slateblue","background-color":"rgb(168, 159, 231)"});
        parli.css({"border-bottom":"1px solid rgb(197, 189, 245)","background-color":"rgb(197, 189, 245)"});

        $($(this).attr("href")).show();
        $("#contents").css("background-color","rgb(197, 189, 245)");
        $(".current").removeClass("current");
        $(this).addClass("current");
        return false;
    })

})