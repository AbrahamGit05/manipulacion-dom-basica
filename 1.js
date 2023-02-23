const h1 = document.querySelector('h1')
h1.textContent = 'lo cambie, sí me acuerdooo';

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')


// form.addEventListener('submit', sumarValuesk)

// function sumarValuesk(event){
//     // console.log({event})
//     event.preventDefault(true);
//    const sumaImputs = Number(input1.value)  + parseInt(input2.value) ;
//    pResult.innerText = 'resultado: ' + sumaImputs;
// }

form.addEventListener('click', sumarValuesk)

function sumarValuesk(event){
    // console.log({event})
    // event.preventDefault(true);
   const sumaImputs = Number(input1.value)  + parseInt(input2.value) ;
   pResult.innerText = 'resultado: ' + sumaImputs;
}