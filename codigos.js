//Para los supervisores
let seleccionar = document.querySelector('select[name="areas"]');
let parrafo = document.querySelector('a');
let turnos = document.querySelector('select[name="turno"]');

turnos.addEventListener('change', establecerturno);

function establecerturno() {
    let turno = turnos.value;
    if (turno === '1') {
        seleccionar.addEventListener('change', establecersuper);

        function establecersuper() {
            let eleccion = seleccionar.value;

            if (eleccion === 'ESS TEST') {
                parrafo.textContent = 'Garcia de León';
            } else if (eleccion === 'TEST OPERATION') {
                parrafo.textContent = 'Miguel Cardenas';
            } else if (eleccion === 'MES TEST') {
                parrafo.textContent = 'Rafael Granados';
            } else if (eleccion === 'NVEC') {
                parrafo.textContent = 'Luz Adriana';
            } else if (eleccion === 'Z-MAINFRAME') {
                parrafo.textContent = 'Rocio Franco';
            } else if (eleccion === 'FFBMS-SG-MES') {
                parrafo.textContent = 'Carlos Iñiguez';
            } else if (eleccion === 'CONSOLIDACION-C&C-PACK') {
                parrafo.textContent = 'Alexis Avalos';
            } else if (eleccion === 'FINAL BUILD') {
                parrafo.textContent = 'Jose Luquin Rosas';
            } else if (eleccion === 'CRIB') {
                parrafo.textContent = 'Miguel Maldonado';
            } else if (eleccion === 'RACK MERGE') {
                parrafo.textContent = 'Eduardo Mercado';
            } else if (eleccion === 'TEAR DOWN') {
                parrafo.textContent = 'Edgar Barcenas';
            } else if (eleccion === 'SUBBASEMBLY') {
                parrafo.textContent = 'Leonardo Cortez';
            } else if (eleccion === 'PPP & CORAL') {
                parrafo.textContent = 'Leonardo Cortez';
            } else if (eleccion === 'VPD') {
                parrafo.textContent = 'Miguel Maldonado';
            }
        }
    } else if (turno === '2') {
        seleccionar.addEventListener('change', establecersuper);

        function establecersuper() {
            let eleccion = seleccionar.value;
        
            if (eleccion === 'ESS TEST') {
                parrafo.textContent = 'Omar Perez Pinto';
            } else if (eleccion === 'TEST OPERATION') {
                parrafo.textContent = 'Manuel Rodriguez';
            } else if (eleccion === 'MES TEST') {
                parrafo.textContent = 'Jaime Calameteo';
            } else if (eleccion === 'NVEC') {
                parrafo.textContent = 'Luz Adriana';
            } else if (eleccion === 'Z-MAINFRAME') {
                parrafo.textContent = 'Rocio Franc';
            } else if (eleccion === 'FFBMS-SG-MES') {
                parrafo.textContent = 'Armando Araiza / Felipe Salazar';
            } else if (eleccion === 'CONSOLIDACION-C&C-PACK') {
                parrafo.textContent = 'Oscar Davalos';
            } else if (eleccion === 'FINAL BUILD') {
                parrafo.textContent = 'Antonio Guardado';
            } else if (eleccion === 'CRIB') {
                parrafo.textContent = 'Javier Damian';
            } else if (eleccion === 'RACK MERGE') {
                parrafo.textContent = 'Ricardo Garcia';
            } else if (eleccion === 'TEAR DOWN') {
                parrafo.textContent = 'Ricardo Garcia';
            } else if (eleccion === 'SUBBASEMBLY') {
                parrafo.textContent = 'Jorge Avila';
            } else if (eleccion === 'PPP & CORAL') {
                parrafo.textContent = 'Jorge Avila';
            } else if (eleccion === 'VPD') {
                parrafo.textContent = 'Javier Damian';
            }
        }
    } else {

    }
}



//document.getElementById('submit').onclick = function () {
//    var radios = document.getElementsByName('turno');
//    var selected = Array.from(radios).find(radio => radio.checked);
//    alert(selected.value)
//}
