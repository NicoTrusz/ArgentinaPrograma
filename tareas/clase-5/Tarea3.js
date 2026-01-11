console.log('Tarea3');

// Arrelgos de tiempos 
let $horas = [];
let $minutos = [];
let $segundos = [];

const $agregarClase = document.querySelector('#agregarClase');
$agregarClase.onclick = function(){
    let horas = document.querySelector('#horas').value;
    let minutos = document.querySelector('#minutos').value;
    let segundos = document.querySelector('#segundos').value;
    if (horas > 0 || minutos > 0 || segundos > 0 ) {
        $horas.push(Number(horas));
        $minutos.push(Number(minutos));
        $segundos.push(Number(segundos));
        mostrarClases();
        document.querySelector('#horas').value='';
        document.querySelector('#minutos').value='';
        document.querySelector('#segundos').value='';
    } else {
        alert("Ingrese un tiempo valido");
    }
}

function mostrarClases(){
    let lista = "tiempo de clases:" + $horas.join("h ") + "h" + $minutos.join("min ") + "min"  + $segundos.join("s ")+"s";
    document.querySelector("#listaClases").innerText = lista ;
}

const $calcularTotal = document.querySelector('#calcularTotal');
$calcularTotal.onclick = function(){
    let totaldeH = 0;
    let totaldeM = 0;
    let totaldeS = 0;
    let i = 0;
    const maxtiempo = Math.max($horas.length + $minutos.length + $segundos.length );
    while(i< maxtiempo){
        totaldeH += $horas[i];
        totaldeM += $minutos[i];
        totaldeS += $segundos[i];
        i++;
    }
    document.querySelector("#resultado").innerText = "tiempo total:" + totaldeH +"h, "+ totaldeM +"min, " + totaldeS + "s." 
}