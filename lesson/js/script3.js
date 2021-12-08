/**
 * click()             點按滑鼠時觸發事件
 * hover()             滑鼠移入時觸發事件
 * mousemove()         滑鼠移動時觸發事件
 * scroll()            捲動捲軸時觸發事件
 */
$(function(){

    //點按滑鼠時觸發事件 click() 以滑鼠點按元素時，呼叫傳入的參數
    $("a").click(function(){
        $(this).css("color","#FF0000");
        /**
         * return false 是用來讓原本的HTML 不執行的JavaScript
         * 若沒有return false，則在點按a元素後，這個網頁的URL最後會再多出一個「#」，並會回到網頁最上方
         */
        return false;
    })

    //滑鼠移入時觸發事件 hover() 當滑鼠移入指定元素時，呼叫傳入的參數
    $("#hover").hover(function(){
        $(this).css("color","pink");
    //滑鼠移入後再移出時觸發事件  當滑鼠移入指定元素又再移出時呼叫傳入的參數
    },function(){
        $(this).css("color","black");
    });

    //滑鼠移動時觸發事件 mousemove() 
    //在指定元素的區域內移動滑鼠時，呼叫傳入的參數。可利用傳入參數與pageX、pageY屬性，取得游標的X、Y座標
    $(window).mousemove(function(e){
        $("#mousemove").html("X:"+e.pageX + "px Y:"+e.pageY+ "px");
    });

    //捲動捲軸時觸發事件 scroll() 元素的捲軸被拉動時，呼叫傳入的參數
    $(window).scroll(function(){
        $("#scroll").css("color","green");
    })
})