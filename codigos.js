//Para los supervisores
let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('a');
let turnos = document.querySelector('input[name="turno"]:checked').value;

seleccionar.addEventListener('change', establecersuper);

function establecersuper() {
    let eleccion = seleccionar.value;
    let turno = turnos.value;

    if (eleccion === 'MES TEST' && turno === 2) {
    parrafo.textContent = 'Rafael granados';
    }  else {
     parrafo.textContent = ' ';
    }
}



//document.getElementById('submit').onclick = function() {
//    var radios = document.getElementsByName('turno');
//    var selected = Array.from(radios).find(radio => radio.checked);
//    alert (selected.value)
//}
