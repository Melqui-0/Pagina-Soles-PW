<<<<<<< HEAD
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const capturebutton = document.getElementById("capturebutton");
const modal = document.querySelector("#modal-webcam");
const openmodal = document.querySelector("#open-modal");
let mediaStream = undefined;

openmodal.addEventListener('click', e=>{
    modal.show();   
    usarcamara();
});
//Obtener acceso a la camara y mostrar la vista previa del video.
const usarcamara = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        mediaStream = stream;
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error("Error al acceder a la cámara: ", error);
    });
}

function apagarcamara () {
    if (mediaStream) {
     const tracks = mediaStream.getTracks();
     
     tracks.forEach((track) => {
        track.stop(); //Detener cada track
     });

     mediaStream = null; // Limpiar referencia al Stream
    }
}
//Funcion para captutar la foto y mostrar la captura en canvas
function capturarfoto () {
    //Dibujar el fotograma actual del video en canvas
    canvas.getContext("2d").drawImage(video, 0 , 0, canvas.width, canvas.height);

    const fotoURL = canvas.toDataURL(); //Con esta URL la puedes descargar

    apagarcamara();
    modal.close();
}

//Agregar el evento click al boton de captura
capturebutton.addEventListener("click", capturarfoto);

=======
>>>>>>> 5311c367ace2fb090e16f06be7ff699d58160c46
//Para los supervisores
let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('a');
let turnos = document.querySelector('input[name="turno"]:checked').value;
<<<<<<< HEAD

=======
>>>>>>> 5311c367ace2fb090e16f06be7ff699d58160c46

seleccionar.addEventListener('change', establecersuper);

function establecersuper() {
    let eleccion = seleccionar.value;
    let turno = turnos.value;

<<<<<<< HEAD
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
=======
    if (eleccion === 'MES TEST') {
        parrafo.textContent = 'Rafael granados';
    } else if (turno === 2) {
        parrafo.textContent = 'Ganaste';
    }
    else {
        parrafo.textContent = ' ';
    }
}

document.getElementById('submit').onclick = function () {
    var radios = document.getElementsByName('turno');
    var selected = Array.from(radios).find(radio => radio.checked);
    alert(selected.value)
}
>>>>>>> 5311c367ace2fb090e16f06be7ff699d58160c46
