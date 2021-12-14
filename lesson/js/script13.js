$(function(){
    $("a").click(function(){
        $("#lightbody").append('<div id="lightbg">');

        $("#lightbody").append('<div id="lightphoto">')

        $("#lightbg").hide();
        $("#lightphoto").hide();

        $("#lightphoto").html("<img>");
        $("#lightphoto img").attr("src",$(this).attr("href"));

        $("#lightphoto img").attr("width",640);
        $("#lightphoto img").attr("height",420);
        $("#lightphoto img").attr("alt","Photo");

        $("#lightbg").fadeIn();
        $("#lightphoto").fadeIn();

        $("#lightbg").click(function(){
            $(this).remove();
            $("#lightphoto").remove();

        })

        return false;
    })
})