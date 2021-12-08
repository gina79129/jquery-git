/**
 *  children()       取得子元素
    parent()         取得父元素
    each()           對元素進行處理
 */
$(function(){
    $("button").click(function(){
        //取得子元素 children() 取得指定元素的子元素
        $("#child").children().css("color","green");
        //取得特定子元素 children(特定元素) 取得指定元素的特定子元素
        $("#child").children("span").css("color","blue");

        //取得父元素 parent() 取得指定元素的父元素
        $("#parent").parent().css({"border":"1px solid red","width":"60px","height":"50px"});

        //對元素進行處理 each() 對每個元素皆進行處理
        $("li").each(function(){
            $(this).html("List"+$(this).index());
        })
    })
})