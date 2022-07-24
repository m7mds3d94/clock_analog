
function datesetting() {
    var  nowdate = new Date();
    var secoundNow = nowdate.getSeconds();
    var minNow = nowdate.getMinutes();
    var hourNow = nowdate.getHours();
    var movesecound = ((secoundNow / 60) * 360) + 90;
    var moveMin = ((minNow / 60) * 360) + ((secoundNow / 60) * 6) + 90;
    var moveHour = ((hourNow / 12) * 360) + ((minNow / 60) * 30) + 90;
    $(".sec-hand").css({"transform":"rotate("+movesecound+"deg)"});
    $(".min-hand").css({"transform":"rotate("+moveMin+"deg)"});
    $(".hour-hand").css({"transform":"rotate("+moveHour+"deg)"});
 
}




setInterval(datesetting,1000)
datesetting()




function changeColor() {
    var randomColor =  Math.random();
    var fixedNumber = Math.floor(randomColor * 1000000);
    $(".mainclock").css({"border":"7px solid "+"#"+fixedNumber+""});
    $(".mainclock").css({"color":""+"#"+fixedNumber+""});
}



var light = null;
function onLight() {
    
    if($(this).attr("on") === "0") {
        $(this).attr("on","1");
        $(this).text("turn off light")
        $(this).css({"background-color":"#e66767"})
        light = setInterval(()=>{
            changeColor();
        },1000);
    } else {
 
        $(this).attr("on","0");
        $(this).text("turn on light")
        $(this).css({"background-color":"#78e08f"})
          clearInterval(light);
    }

}

$(".light").click(onLight)
// changeColor()