console.log('Tarea2');

const $Guardar = document.querySelector('#Guardar');
$Guardar.onclick = function(){
  const primerNombre = document.querySelector('#primer-nombre').value;
  const segundoNombre = document.querySelector('#segundo-nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const edad = document.querySelector('#Edad').value;
  const informacionCompleta = `${primerNombre} ${segundoNombre} ${apellido}, Edad: ${edad}`;
  document.querySelector('#resultado').innerText = informacionCompleta;
  const $h1 = document.querySelector('h1');
  $h1.innerText = `Bienvenido, ${primerNombre}!`;
  console.log(informacionCompleta);
}
