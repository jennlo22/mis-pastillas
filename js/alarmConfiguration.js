// JavaScript Document
function saveLocalStorage(){
	if(checkLocalStorageSupport){
		window.localStorage.setItem("pillsNumber",document.getElementById("pillsNumber").value);
		window.localStorage.setItem("alarmHour",document.getElementById("alarmHour").value); 
		alert(document.getElementById("firstDay").value);
		window.localStorage.setItem("firstDay",document.getElementById("firstDay").value); 
		window.localStorage.setItem("pillsBrand",document.getElementById("pillsBrand").value);
		alert('guardando');
	}
}

function checkLocalStorageSupport() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null; 
	}catch (e) {
		return false;
	}
}

function loadPillsBrand(){
	var pillsBrand = window.localStorage.getItem("pillsBrand");
  	return pillsBrand;  
}

function loadFirstDay(){
	var alarmfirstDay = window.localStorage.getItem("firstDay");
  	return alarmHour;  
}

function loadAlarmHour(){
	var alarmHour = window.localStorage.getItem("alarmHour");
  	return alarmHour;  
}

function loadPillsNumber(){
	var pillsNumber = window.localStorage.getItem("pillsNumber");
  	return pillsNumber;  
}