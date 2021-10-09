    //getting data
    //getting data
  var temp=document.getElementById("temp")
  

  var loca=document.getElementById("city")
 var search=document.getElementById("search")
 var button=document.getElementById("button")
  var Min=document.getElementById("min")
  var main=document.getElementById("speed")
  var disc=document.getElementById("disc")
  var press=document.getElementById("press")
  var hum=document.getElementById("hum")
  var wind=document.getElementById("wind")
  var icon=document.getElementById("icon")
  var time=document.getElementById("timee")
  var Day=document.getElementById("day")
 var Month=document.getElementById("monthd")
  var Datee=document.getElementById("date")
  //defining variable
  var readyTemp="";
  var readysearch="Khanna";
  let readData="";
  var readyloca="";
  var readyMin="";
  var readyMax="";
  var readypress="";
  var readyhum="";
  var readywind="";
  var readyicon="";
  var readymain="";
  var readydisc="";
  console.log(search.value)
  var weatherData=async ()=>{
    readysearch=search.value;
    
  const rawData=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=`+readysearch+`&appid=6c012cb514923fae6d816d7b4af1cb73`)
    realData=await rawData.json();

 //extracted data from json
  readyTemp=realData.main.temp;
  readyMin=realData.main.temp_min;
  readyMax=realData.main.temp_max;
  readyloca=realData.name;
  readyhum=realData.main.humidity;
  readywind=realData.wind.speed;
  readypress=realData.main.pressure;
  readyicon=realData.weather[0].icon;
  readymain =realData.weather[0].main;
  readydisc=realData.weather[0].description;
  
  //defined data
  temp.innerHTML=(Math.round(readyTemp-273))+"°C";
  Min.innerHTML=(Math.round(readyMin-272))+"°C"+"/"+(Math.round(readyMax-274))+"°C";
  loca.innerText=readyloca;

  hum.innerText=readyhum+"%";
  wind.innerHTML=readywind+"Km/h";
  press.innerHTML=readypress;
  icon.innerHTML=readyicon;
  main.innerHTML=readymain;
  disc.innerHTML=readydisc;
  console.log(readydisc);
};
    
    //time
  var clock=new Date()
    var hour=clock.getHours();
    var min=clock.getMinutes();
    var sec=clock.getSeconds();
    var day=clock.getDay();
    var date=clock.getDate();
    var month=clock.getMonth();
    var year=clock.getFullYear();

  const Days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

  Day.innerHTML=Days[day];
  
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
Month.innerText=months[month]+" "+date;
//  Datee.innerHTML=;
 
   if(hour>12){
      ampm="PM";
    }else{
      ampm="AM";
    }
    if(hour>12){
      hour=hour-12}
    if(hour<10){
     hour="0"+hour; }
     if(min<10){
     min="0"+min;
   }
   if(sec<10){
     sec="0"+sec;
   }
  time.innerText=hour+":"+min+":"+ampm;
 
 button.addEventListener("click",function(){
   weatherData();
 });
 
 