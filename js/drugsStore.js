// JavaScript Document algo mas

function loadDrugStores(){
	var $log = $('#pillsLog');
	$log.html("");
	var $li;
	sessionStorage.setItem("firstDay", "2014-10-01T00:00:00");
	sessionStorage.setItem("pillsNumber", "28");
	
	var firstDay = window.localStorage.getItem("firstDay");
	var pillsNumber = loadPillsNumber();
	
	var nextDay;
	for(var i=0; i<pillsNumber; i++){
		$li=$('<li/>');
		f = new Date(addDays(firstDay, i));
		$li.html(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()]);
		$log.append($li);
	
	}
}
