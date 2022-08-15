const btnRegistro = document.getElementById('registro');
const txtRegistro = document.getElementById('txtRegistro');
const btnHome = document.getElementById('home');

btnRegistro.addEventListener('click', ()=>{
    let nombre = prompt('Ingresa tu nombre!', '');
    btnRegistro.classList.toggle('hide');
    txtRegistro.classList.toggle('hide');

    let nroVisitante = localStorage.getItem('visitante');
    if (nroVisitante == null){
        nroVisitante = 1;
        localStorage.setItem('visitante', nroVisitante);
    }else{
        nroVisitante++;
        localStorage.setItem('visitante', nroVisitante );
    }

    if (nombre == null){
        nombre = '';
    }
    txtRegistro.innerHTML = `Hola ${nombre} eres el visitante n° ${nroVisitante}`;
})
