// JavaScript Document
function saveLocalStorage()
  {
  if(checkLocalStorageSupport)
  {
  window.localStorage.setItem("pillsNumber",document.getElementById("pillsNumber").value);
  window.localStorage.setItem("alarmHour",document.getElementById("alarmHour").value);
  
  window.localStorage.setItem("alarmfirstDay",document.getElementById("alarmfirstDay").value);
  
   window.localStorage.setItem("pillsBrand",document.getElementById("pillsBrand").value);
  }
 }
 
 function checkLocalStorageSupport() {
 try {
   return 'localStorage' in window && window['localStorage'] !== null; } catch (e) {
   return false;
 }
}

function loadPillsBrand(){
	var pillsBrand = window.localStorage.getItem("alarmHour");
  	return pillsBrand;  
}

function loadAlarmfirstDay(){
	var alarmfirstDay = window.localStorage.getItem("alarmHour");
  	return alarmHour;  
}

function loadAlarmHour(){
	var alarmHour = window.localStorage.getItem("alarmHour");
  	return alarmHour;  
}

function loadPillsNumber(){
	var pillsNumber = window.localStorage.getItem("NumeroPastas");
  	return pillsNumber;  
}