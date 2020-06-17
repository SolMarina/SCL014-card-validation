import validator from './validator.js';

const validatebuton = document.getElementById('btn1');
validatebuton.addEventListener('click', validate);

function validate(){
  
let card_number  = document.getElementById("creditCardNumber").value;
let name  = document.getElementById("user_name").value
let date  = document.getElementById("datenumber").value;

//control de flujo para mostar campo obligatorio o para evitar que ingrese con letras
if(card_number=="" || !noletters(card_number))
{
  alert('Por favor Coloque solo Numeros en el campo  de tarjeta de credito');
}
else{
  document.getElementById("fnumber").innerHTML = (validator.maskify(card_number));
  document.getElementById("fname").innerHTML =(name)
  document.getElementById("fdate").innerHTML =(date)
  if (validator.isValid(card_number))
  {
    document.getElementById("validCredidcard").innerHTML = "tdc valida";
  }else{
    document.getElementById("validCredidcard").innerHTML = "tdc no valida";
  }
  }
}
//funcion para que el input no admita letras
function noletters(str){
    let solonumeros=true
    var letrasquemegustan= ["0","1","2","3","4","5","6","7","8","9"]
    for(let i= 0; i<str.length;i++ ){
     if(letrasquemegustan.indexOf(str[i]) == -1) solonumeros = false
    }
    return solonumeros
  }





 
  
  