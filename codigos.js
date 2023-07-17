//Para los supervisores
let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('a');


seleccionar.addEventListener('change', establecersuper);

function establecersuper() {
    let eleccion = seleccionar.value;

    if (eleccion === 'MES TEST') {
        parrafo.textContent = 'Rafael granados';
    } else {
        parrafo.textContent = ' ';
    }
}

//document.getElementById('submit').onclick = function () {
//    var radios = document.getElementsByName('turno');
//    var selected = Array.from(radios).find(radio => radio.checked);
//    alert(selected.value)
//}

let parra = document.querySelector('p')
let turnos = $('input[name="turno"]:checked').val();

turnos.addEventListener('change',  establecerturno);

function establecerturno(){
    // turno = turnos.value;
    
    if ($('input[name="el_nombre_de_tu_radio"]').is(':checked')){
        parra.textContent = '2';
    } else {
        parra.textContent = ' ';
    }
    
}