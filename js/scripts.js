// PLAY MUSICA
const audio = document.getElementById('miCancion');
const textoPlay = document.getElementById('textoPlay');
const iconoPlay = document.getElementById('iconoPlay');

function togglePlay() {
    if (audio.paused) {
    audio.play();
    textoPlay.textContent = "PAUSA";
    iconoPlay.src = "img/btn-pausa.png"; 
    } else {
    audio.pause();
    textoPlay.textContent = "PLAY";
    iconoPlay.src = "img/btn-play.png";
    }
}

// CUENTA REGRESIVA
const fechaObjetivo = new Date("June 28, 2025 21:30:00").getTime(); 
const cuenta = document.getElementById("cuenta");
const intervalo = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
    clearInterval(intervalo);
    cuenta.innerHTML = "¡Llegó la hora!";
    return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    cuenta.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}, 1000);

// ABRIR UBICACION
function abrirMaps() {
    const url = "https://www.google.com/maps/place/Los+Arcos/@-31.383352,-64.2220878,18.75z/data=!4m6!3m5!1s0x943298dea2bc9739:0xe074fefb7e820bbf!8m2!3d-31.3831049!4d-64.2224556!16s%2Fg%2F1tmbx658?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"; // Córdoba, Argentina
    window.open(url, "_blank");
}