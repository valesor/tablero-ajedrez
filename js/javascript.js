//Declaro variables 
const input= document.querySelector('.inputConvertir')
const boton= document.querySelector('#enviar')
const mens= document.querySelector('#mensaje')

//  Evento
const mensaje=""

boton.addEventListener('click', () => {
   
    const resultado= (input.value * 9/5) + 32
  mens.innerHTML=  `<h5> El resultado es ${resultado}</h5>` 
  mens.style.backgroundColor = '#37EE9A';
  mens.style.width = '120px';
  mens.style.height = '20px';
  mens.style.marginLeft = '8em';
  mens.style.textAlign = 'center';
  mens.style.marginTop = '.5em';
  mens.style.borderRadius = '20px';
} )




