/**
 *  html()        修改HTML內容 取得HTML內容
    prepend()     插入元素 移動元素(最前面)
    append()      插入元素 移動元素(最後面)
    remove()      刪除元素
    index()       取得順序編號
 */
$(function(){
    $("button").click(function(){
        //修改HTML內容 html() 將HTML原始碼當作參數傳入，即可修改元素內容
        $("#html").html("<strong>HELLO WORLD!</strong>");
        //取得HTML html() 沒有傳入參數時，可用來取得選擇器所指向元素的內容
        $("#showhtml").html($("#whathtml").html());

        //插入元素 prepend() 將元素當做參數傳入時，在選擇器所指向的元素內的最前面插入該元素
        // $("#addprd").prepend("<li>List1</li>");
        //移動元素 prepend() 將可用來表示元素的虛擬類別當作參數傳入時，即可將該元素移到選擇器所指元素內的一開頭
        // $("#moveprd").prepend($("li:last-child"));

        //插入元素 append() 將元素當做參數傳入時，在選擇器所指向的元素內的最後面插入該元素
        // $("#append").append("<li>a3</li>");
        //移動元素 append() 將可用來表示元素順序的虛擬類別當做參數傳入時，則可將該元素移到選擇器所指元素內的最後面
        $("#moapp").append($("li:first-child"));

        //刪除元素 remove() 刪除指定元素
        $("#rmd").remove();

        //取得順序編號 index() 取得選擇器所指向元素在同一階層元素中的順序編號。編號由0開始起跳
        //只要是屬性於同一階層的元素，就算是元素類型不同，一樣會被計入
        $("#moapp").html($("#showindex").index());
    })
})