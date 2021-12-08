$(function(){
    var num;
    num = 3;
    console.log(num)
    num = 5;
    console.log(num)
    var string = "string";
    console.log(string)
    var numstr = "3";
    console.log(numstr)
    var sum = 3+3;
    console.log(sum)
    var sumstr = "3" + "3";
    console.log(sumstr);

    var sampleArray = new Array();
    sampleArray = ["蘋果","橘子","葡萄"];
    console.log(sampleArray)
    console.log(sampleArray[0])
    sampleArray.unshift("香蕉");
    console.log(sampleArray)
    sampleArray.push("檸檬")
    console.log(sampleArray)
    sampleArray[1] = "梨子";
    console.log(sampleArray)


    calFunc();
    calFunc(p2,2000);
    calFunc(p3,5000);
    function calFunc(elm=null,price=null){
        $("#p1").html("商品價格為3000元");
        $(elm).html("商品價格為"+price+"元")
    }

    var n = 4;
    if(n<5){
        $("#p4").html("變數num小於5");
    }

    var n = 10;
    if(n<5){
        $("#p5").html("變數num小於5");
    }else{
        $("#p5").html("變數num為5以上");
    }

    var n = 7;
    if(n<5){
        $("#p6").html("變數num小於5");
    }else if(n<10){
        $("#p6").html("變數num在5以上但小於10");
    }else{
        $("#p6").html("變數num為10以上");
    }

    var total = 0;
    for(i=0;i<=10;i++){
        total += i;
    }
    $("#p7").html("變數num的值為"+total);

    var number = 3.5;
    console.log(Math.floor(number)) //將小數無條件捨去
    console.log(Math.ceil(number))  //將小數無條件進位
    console.log(Math.round(number)) //將小數四捨五入
    $("#p8").html("隨機產生數值為"+Math.floor(Math.random()*100))

    console.log($(".target").length)
    $("#p9").html("陣列數:"+sampleArray.length)
    var str = "javascript";
    console.log(str.length)

    var count = 0;
    //setInterval() 類似計時器，可在每隔一定的時間就重覆執行指定函式
    var timer = setInterval(countFun,1000);
    function countFun(){
        count++;
        $("#p10").html("變數count的值為:"+count)
        //要中止setInterval() 方法所設定的計時器，必須使用clearInterval()方法。使用時必須透過變數來指定
        if(count>=10) clearInterval(timer)
    }
    //利用alert()方法，可在式窗上跳出訊息對話框
    alert("hello world")

})