 /*时间插件
 * type为传入的参数值决定执行哪个方法
 */
function upupooTimeFuntimePlugInUnit(type){
	switch (type){
		case 1:
		$('#upupoo_exhibitionLayer_two').css({'width':'20%','height':'22%'})
		$('#upupoo_exhibitionLayer_two').html(upupooTimeFunstyleTime1)
		upupooTimeFunstart()
			break;
		case 2:
		$('#upupoo_exhibitionLayer_two').css({'width':'17.6%','height':'32%'})
		$('#upupoo_exhibitionLayer_two').html(upupooTimeFunstyleTime2)
		upupooTimeFunstart2()
			break;
		case 3:
		$('#upupoo_exhibitionLayer_two').css({'width':'14%','height':'7.1%'})
		$('#upupoo_exhibitionLayer_two').html(upupooTimeFunstyleTime3)
		upupooTimeFunstart3()
			break;
		default:
		return
			break;
	}
}
var upupooTimeFunstyleTime1 = `
	<p id="upupooTimeStyleclock"></p>
	<p id="upupooTimeStyleseconds"></p>
	<p id="upupooTimeStyledate"></p>
`;
function upupooTimeFunstart() {
  $(function() {
    setInterval(upupooTimeFungetTime, 1000);
  });
}   
function upupooTimeFungetTime() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  if (hour < 10) {
	hour = '0' + hour;
  }
  if (minute < 10) {
	minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  document.getElementById("upupooTimeStyleclock").innerHTML = hour + ":" + minute;
  document.getElementById("upupooTimeStyledate").innerHTML = day + "." + month + "." + year;
  document.getElementById("upupooTimeStyleseconds").innerHTML = second;
}

var upupooTimeFunstyleTime2 = `
	<div class="upupooTimeStyletimeblock">
        <h6 class="upupooTimeStyledate" style="font-size:24px;"></h6>
        <h1 class="upupooTimeStyletime" style="font-size:60px;"></h1>
        <h4 class="upupooTimeStyleseconds" style="font-size:36px;">60s</h4>
    </div>
`;
function upupooTimeFunstart2() {
	setInterval(function() {
		var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes() + "";

		$('.upupooTimeStyledate').html(""+months[dt.getMonth()]+" "+dt.getDate()+", "+dt.getFullYear()+"");

		var hours = dt.getHours() < 12 ? dt.getHours() : dt.getHours() - 12;
		var am = dt.getHours() < 12 ? "AM" : "PM";

		var minutes = ""+dt.getMinutes()+"";
		if (minutes < 10) {
			minutes = "0"+minutes+"";
		}
		$('.upupooTimeStyletime').html(""+hours+":"+minutes+" "+am+"");
		$('.upupooTimeStyleseconds').html(""+dt.getSeconds()+"s")
	}, 1000);
}   

var upupooTimeFunstyleTime3 = `
	<div id="upupooTimeStyleclock3">00:00</div>
`;
function upupooTimeFunstart3(){
	var oClock = document.querySelector("#upupooTimeStyleclock3");
	function upupooTimeFungetTime3(){
		var t = new Date();
		oClock.innerHTML = upupooTimeFunadd0(t.getHours())+" : "+upupooTimeFunadd0(t.getMinutes())+" <span class='sec'>"+upupooTimeFunadd0(t.getSeconds())+"</span>";
	};
	function upupooTimeFunautoTime(){
		upupooTimeFungetTime3();
		setTimeout(upupooTimeFunautoTime, 1000);
	}
	function upupooTimeFunadd0(n){
		return n<10 ? '0'+n : ''+n;
	}
	upupooTimeFunautoTime();
}

