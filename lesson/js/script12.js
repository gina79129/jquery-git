$(function(){
    $(window).scroll(function(){
        $("#floatnav").stop().animate({"top":$(window).scrollTop() + 100},500);
    })
})