
const validator = {


//Funcion maskyfy para transformar los primeros numeros en asterisco
 maskify: (creditCardNumber) => {
  if(creditCardNumber.length >= 5)
    {
      return "#".repeat(creditCardNumber.length -4) + creditCardNumber.substring(creditCardNumber.length -4);
    }
  return creditCardNumber;
},

//Funcion para vailidar la tarjeta
 isValid:(creditCardNumber)=>{
    let results=0
    let reversestring = creditCardNumber.split("").reverse();
    for (let i = 0; i <reversestring.length ; i++) {
        if((i+1) % 2 == 0) {
            results=results + duplicate(parseInt (reversestring[i]))
          }else{
            results=results + parseInt(reversestring[i])
        }
}
if (results % 10 == 0){
return true;
}else{
    return false;
}
}
}

//Funcion para duplicar el digito (para multiplicar por dos numeros que estan en la posicion par)
function duplicate(number) {
  let result = number*2
  if (result>=10) result = result-9
return result;
}

export default validator;
