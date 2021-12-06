//等HTML檔全部載入完畢，才執行這裡所寫的指令
$(function(){  //js的寫法 $(document).ready(function(){})

    //取得元素在視窗捲動時的位置 scrollTop() 取得瀏覽器視窗捲動時元素的位置。將選擇器訂為$(window)，就可將選擇器指向瀏覽器
    $(window).scroll(function(){
        $("#sot").html("Scoll:"+$(window).scrollTop()+"px");
    })
    $("button").click(function(){
        //$(選擇器).方法(參數)
        // $("button").html("Click");
        // alert($("button").html());
        // $("button").css("background","#000033");

        // $(this).html("Click");
        // alert($(this).html());
        // $(this).css("background","#000033");

        $(this).html("Click").css("background","#000033");

        // $("p").css("color","#FF0000");
        //新增類別 addClass() 在元素中新增css的類別，傳入參數為要新增的類別名稱
        $("p").addClass("textRed");

        //刪除類別 removeClass() 刪除元素中的css類別，傳入參數為要刪除的類別名稱
        $("#rmd").removeClass("textRed");

        //判別類別是否存在 hasClass() 用來判別元素中，傳入參數為欲確認是否存在的類別名稱。通常與if條件句一起使用
        if($("#had").hasClass("textRed")){
            $("#had").html("Yes");
        }else{
            $("#had").html("No");
        }

        //取得寬度 width() 去得選擇器所指向元素的寬度(px)
        $("#divwidth").html("Width:"+$("#how").width()+"px");

        //取得高度 height() 取得選擇器所指向元素的高度(px)
        $("#divheight").html("Height:"+$("#how").height()+"px");

        //取得位置 offset() 取得選擇器所指向元素的位置(座標)
        //.offset().top 可取得與頂端的距離 .offset().left 可取得左端的距離
        $("#ofs").html("Top:"+$("#ofs").offset().top+"px Left:"+$("#ofs").offset().left+"px");

        //設定屬性值 attr() 設定元素的屬性值
        $("#chimg").attr("src","../img/2021010915213518.jpg");
        //取得屬性值 attr() 取得元素的屬性值
        $("#showimg").html($("#chimg").attr("src"));

        //取得value屬性值 val() 取得表單相關元素的value屬性值
        $("#showtext").html($("input").val());
    })
})