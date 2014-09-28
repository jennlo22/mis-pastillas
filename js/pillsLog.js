var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

function loadPillsLog(){
	var $log = $('#pillsLog');
	$log.html("");
	var $li;
	localStorage.setItem("firstDay", "2014-10-01T00:00:00");
	localStorage.setItem("pillsNumber", "28");
	
	var firstDay = window.localStorage.getItem("firstDay");
	var pillsNumber = loadPillsNumber();
	//console.log(firstDay);
	//alert(firstDay+' dia');
	//alert(pillsNumber + ' pastas');
	var nextDay;
	for(var i=0; i<pillsNumber; i++){
		$li=$('<li/>');
		f = new Date(addDays(firstDay, i));
		$li.html(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()]);
		$log.append($li);
	
	}
}

function addDays(date, days)
{
    var dat = new Date(date.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

var dat = new Date();