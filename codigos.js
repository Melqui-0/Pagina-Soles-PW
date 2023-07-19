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

let button = $('input[name="turno"]:checked').val();
let prueba = document.querySelector('p');

if (button === 2 ){
    prueba .textContent = 'qwerty';
} else {
    prueba.textContent = ' ';
}