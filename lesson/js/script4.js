$(function(){
    $("#mombtn").click(function(){

        //顯示 show() 顯示選擇器所指向的元素
        $(".show").show();
        
        //隱藏 hide() 隱藏選擇器所指向的元素
        $(".hide").hide();

        //淡入效果 fadeIn() 將選擇器所指向的元素以淡入效果顯示
        $(".fadein").fadeIn();
        //淡入效果(指定速度) fadeIn(毫秒 1000毫秒=1秒) 以傳入參數所設定的速度淡入顯示
        $(".fadein1000").fadeIn(1000);
        //淡入效果(指定淡入顯示後要執行的動作) fadeIn(funciton(){}) 以傳入參數指定淡入顯示完成後要進行的動作
        $(".fadeincss").fadeIn(function(){
            $(this).css("color","red");
        })
        //淡入效果(指定速度及完成後要執行的動作) fadeIn(毫秒,function(){}) 以傳入參數指定淡入顯示的速度及完成後要進行的動作
        $(".fadeincss1000").fadeIn(1000,function(){
            $(this).css("color","blue");
        })

        //淡出效果 fadeOut() 將選擇器所指向的元素以淡出效果隱藏
        $(".fadeout").fadeOut();
        //淡出效果 fadeOut(指定速度) 將選擇器所指向的元素，以傳入參數所設定的速度(單位為毫秒)淡出後隱藏;
        $(".fadeout1000").fadeOut(1000);
        //淡出效果(指定淡出後要執行的動作) fadeOut(function(){}) 以傳入參數指定將元素淡出後要進行的動作
        $(".fadeoutcss").fadeOut(function(){
            $(this).css("color","#FF0000");
        })
        //淡出效果(指定速度及淡出後要執行的動作) fadeOut(毫秒,function(){}) 以傳入參數指定淡出的速度及完成後要進行的動作
        $(".fadeout1000css").fadeOut(1000,function(){
            $(this).css("color","#FF0000");
        })
    })

    //元素展開/收起 slideToggle() 將選擇器所指向的元素展開/收起
    $("dt").click(function(){
        $("dd").slideToggle();
    })

    //停止動畫顯示 stop() 若元素正以動畫方式顯示，則停止動畫顯示
    $("dt").hover(function(){
        $("dd").stop().slideToggle();
    })

    //以動畫顯示 animate() 以動畫方式顯示，將元素的樣式設定逐漸變成傳入參數所指定的CSS樣式
    $("#anclick").click(function(){
        //以500毫秒的時間往left:200px移動
        // $("#anmo").animate({"left":"200px"},500);
        //每點按一次就位移100px
        $("#anmo").animate({"left":"+=100px"},500);
    })
})