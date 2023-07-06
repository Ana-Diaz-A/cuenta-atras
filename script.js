function getTimeRemaining(endtime){ //FUNCIÓN OBTERNER EL TIEMPO RESTANTE
    var t = Date.parse(endtime) - Date.parse(new Date()); //obtener la diferencia total en segundos
    var seconds = Math.floor((t / 1000) % 60); //convertir el total de segundos en número de segundos
    var minutes = Math.floor((t / 1000 /60) % 60); //convertir el total de segundos en número de minutos
    var hours = Math.floor((t / (1000 * 60 *60)) % 24); //convertir el total de segundos en número de horas 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); //convertir el total de segundos en número de días
    debugger;
    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function initializeClock(id, endtime){ //FUNCIÓN INICIALIZAR RELOJ
    var clock = document.getElementById(id); //primero toma #clockdiv de div
    var daysSpan = clock.querySelector('.days'); //toma la etiqueta de intervalo de días del div de #clockdiv
    var hoursSpan = clock.querySelector('.hours'); //toma la etiqueta de intervalo de horas del div de #clockdiv
    var minutesSpan = clock.querySelector('.minutes'); //toma la etiqueta de intervalo de minutos del div de #clockdiv
    var secondsSpan = clock.querySelector('.seconds'); //toma la etiqueta de intervalo de segundos del div de #clockdiv

    function updateClock(){ //FUNCIÓN ACTUALIZAR RELOJ
        var t = getTimeRemaining(endtime); //calcular la fecha de finalización - fecha actual y devolver un objeto de fecha con días, horas, minutos y segundos
    
        daysSpan.innerHTML = t.days; //mostrar el número de días
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2); //cuando el número es 024, devolverá 24; cuando el número es 09, devolverá 09
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if(t.total <=0){
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

/*inicializa la fecha de hoy y luego agrega días, horas, minutos y segundos;
  establece hoy como nueva fecha;
  añade número de días (en segundos);
  analiza el número total de segundos;
  convierte el número total de segundos en la nueva fecha*/
var deadline = new Date(Date.parse(new Date()) + 9 * 24 * 60 *60 *1000); 

initializeClock('clockdiv', deadline); //toma los elementos HTML necesarios de la página y agrega la fecha a partir de la cual el temporizador comienza su cuenta regresiva