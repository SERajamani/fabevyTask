function getCustomDate() {
  var date = new Date();
  var day = date.getTime() / (86400000);
  var years = Math.floor(day / 365.25);
  var remainingDays = day % 365.25;
  var months = Math.floor(remainingDays / 30.44 );
  var days = Math.floor(remainingDays % 30.44);

  return {
    day: days + 1,  
    month: months+1 ,
    year: 1970 + years
  };  
}

function getCustomTime() {
  var date = new Date();
  var hours = Math.floor(date.getTime() / (1000 * 60 * 60) % 24);
  var minutes = Math.floor(date.getTime() / (1000 * 60) % 60);
  var seconds = Math.floor(date.getTime() / 1000 % 60);

  return {
    hours,
    minutes,
    seconds
  };
}


var dmy1 = document.getElementById("dmy1");
var m1 = document.getElementById("m1");
var y1 = document.getElementById("y1");
var t1 = document.getElementById("t1");
var daysList = document.getElementById("days").getElementsByTagName("i");

var newTime = setInterval(updateTime, 1000);

function updateTime() {
  var customDate = getCustomDate();
  var customTime = getCustomTime();


  if (customTime.seconds === 59) {
      customTime.seconds = 0;

    
      if (customTime.minutes === 59) {
        customTime.minutes = 0;

     
        customTime.hours++;

     
        if (customTime.hours === 24) {
          customTime.hours = 0;
        }
      } 
      else {
      customTime.minutes++;
    }
  } 
  
  else {
    customTime.seconds++;
  }

  m1.textContent = customDate.month;
  dmy1.textContent = customDate.day;
  y1.textContent = customDate.year;
  t1.textContent = customTime.hours + ":" + customTime.minutes + ":" + customTime.seconds;

  var dayIndex = new Date().getDay();
 
  for (var i = 0; i < daysList.length; i++) {
    

  if (i === dayIndex ) {
    daysList[i].style.color = "red"; 
  } else {
    daysList[i].style.color = "white"; 
  }
  } 

}