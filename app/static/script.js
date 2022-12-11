function showTime(){
    var date = new Date();
    var h= date.getHours();
    var m= date.getMinutes();
    var s= date.getSeconds();
    var session="AM";
    if(h==0){
        h = 12;
    }
    if(h>12){
        h=h-12;
        session="PM";
    }
    h =(h<10)?"0"+h:h;
    m =(m<10)?"0"+m:m;
    s =(s<10)?"0"+s:s;
    document.getElementById("DigitalClock").innerHTML= h + ":" + m + ":" + s + "" + session;
    setTimeout(showTime,1000);
}
showTime();
// this is battery js
var c =document.getElementById("batCanvas");
var ctx = c.getContext("2d");

var batLevel = 0;

navigator.getBattery().then(function(battery) {
    function
    updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener(' chargingchange',function(){
        updateChargeInfo();
    });
    function
    updateChargeInfo(){
        console.log("Battery charging?" + 
        (battery.charging ? "Yes": "No"));
        if(battery.charging){
            document.getElementById("bolt").style.visibility = "visible";
            console.log("I am charging");
        } else {
            document.getElementById("bolt").style.visibility = "hidden";
            console.log("I am not charging");
        }
    }

    battery.addEventListener('levelchange',function(){
        updateLevelInfo();
    });
    function updateLevelInfo(){
        var batteryL = battery.level;

        console.log("Battery level: "+battery.level * 100 + "%");

        batLevel = batteryL * 10;

        document.getElementById("BatteryLevel").innerHTML = '<p>'+ Math.floor(batLevel * 10) + '%</p>';

    }
    var batL = Math.floor(batLevel);
    switch(batL){
        case 0:
    console.log("Battery Level is <10");
        break;
        case 1:
            ctx.fillRect(500, 250,100, 500);
    console.log("Battery Level is < 10");
        break;
        case 2:
            ctx.fillStyle = "#FF0800", 
            ctx.fillRect(500, 250, 200, 500)
        console.log("Battery Level is <20");
           break;
        case 3:
            ctx.fillStyle = "#FF2E00", ctx.fillRect(500, 250, 300, 500);

            console.log("Battery Level is < 30");
            break;
        case 4:
            ctx.fillStyle = "#FF5400", ctx.fillRect(500, 250, 500, 500);
            console.log("Battery Level is < 40");
            break;

        case 5:
            ctx.fillStyle = "#FF7A00", ctx.fillRect(500, 250, 500, 500);
            console.log("Battery Level is < 50");
            break;

        case 6:
            ctx.fillStyle = "#FF9900", ctx.fillRect(500, 250, 600, 500);
            console.log("Battery Level is < 60");
            break;
        case 7:
            ctx.fillStyle = "#B2A800", ctx.fillRect(500, 250, 700, 500);
            console.log("Battery Level is < 70");
            break;
        case 8:
            ctx.fillStyle = "#73B500", ctx.fillRect(500, 250, 800, 500);
            console.log("Battery Level is < 80");
            break;
        case 9:
            ctx.fillStyle = "#33C200", ctx.fillRect(500, 250, 900, 500);
            console.log("Battery Level is < 90");
        break;
        case 10:
            ctx.fillStyle = "#00cc00", ctx.fillRect(500, 250, 1000, 500);
            console.log("Battery Level is  100");
        break;
        default:
            console.log("Battery Level not found");
        break;
  }

  ctx.fillStyle = "#000000", ctx.fillRect(1500, 400, 50, 200);

  ctx.lineWidth = 25;
  ctx.strokeRect(500, 250, 1000, 500);

});



