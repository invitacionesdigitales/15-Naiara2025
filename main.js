
let diaEvento = new Date('August 9, 2025 21:30:00').getTime();
let boton = document.querySelector("#btn")



// diaEvento = new Date().getTime() + 1_000 * 20;

let relojE = document.getElementById('reloj');

const diaM = 86_400_000;
const horaM = 3_600_000;
const minutoM = 60_000;
const segundoM = 1_000;
const ejecutarReloj = setInterval(
    () => {

        let hoy = new Date().getTime();
        let distancia = diaEvento - hoy;

        let diaR = Math.trunc(distancia / diaM);

        let horaR = Math.trunc((distancia % diaM) / horaM);

        let minutoR = Math.trunc((distancia % horaM) / minutoM);

        let segundoR = Math.trunc((distancia % minutoM) / segundoM);

        if (distancia  < 1) {
            clearInterval(ejecutarReloj);
            diaEventoAhora();
        }

        pintarElementos(diaR, horaR, minutoR, segundoR);

    }
, 1000);

let creDia = document.getElementById('cre-dia');
let creHora = document.getElementById('cre-hora');
let creMinuto = document.getElementById('cre-minuto');
let creSegundo = document.getElementById('cre-segundo');
function pintarElementos(dia, hora, minuto, segundo) {

    segundo = (segundo < 10) ? '0' + segundo : segundo;

    minuto = (minuto < 10) ? '0' + minuto : minuto;

    hora = (hora < 10) ? '0' + hora : hora;

    creDia.innerHTML = dia;
    creHora.innerHTML = hora;
    creMinuto.innerHTML = minuto;
    creSegundo.innerHTML = segundo;
}

function diaEventoAhora () {
    alert('Dia del Evento!!!');
    // Todo el codigo cuando el evento llegue
}






  boton.addEventListener("click", () => {

    Swal.fire({
      title: '<strong>VER LA UBICACION<u></u></strong>',
      icon: 'success',
      html:
        'INGRESÁ' +
        '<iframe src="https://www.google.com/maps/embed?pb=!3m2!1ses!2sar!4v1749472560340!5m2!1ses!2sar!6m8!1m7!1ssKctBa0mBY6_arM32-yDKw!2m2!1d-33.15546589974649!2d-62.8556056003649!3f308.94339174497196!4f-7.948603526652391!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
        'Podes ampliar el mapa',
        
        
    })
  });
  

