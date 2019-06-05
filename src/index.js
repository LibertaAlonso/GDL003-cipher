/* inicializando variables */
let x, asciiCode, offsetC, offsetD, stringCipher = '', cipher = '',deCipher= '', returnCipher, stringDecipher = '', returnDecipher;


/* Focus en textarea*/
const init = () =>
{
 document.getElementById("caesarShiftString").focus();

}



/* capturando la frase a cifrar*/
const captureCipher=()=>{

stringCipher= document.getElementById("caesarShiftString").value;

stringCipher = stringCipher.toUpperCase().trim();


/* offset de cifrado*/
offsetC = parseInt(document.getElementById("offsetCipher").value);

 returnCipher =  codeCipher(offsetC,stringCipher);
 document.getElementById("caesarShiftResult").value = returnCipher;
}


/* capturando la frase a descifrar*/
const captureDecipher=()=>{

    stringDecipher= document.getElementById("caesarShiftString").value;
    stringDecipher = stringDecipher.toUpperCase().trim();


    /* offset descifrar*/
    offsetD = parseInt(document.getElementById("offsetCipher").value);

    returnDecipher =  codeDecipher(offsetD,stringDecipher);
     document.getElementById("caesarShiftResult").value = returnDecipher;
    }



 /* funcion cifrar*/
const codeCipher =(offset,string)=> {

for(let i=0; i<string.length;i++){

  x = string.charCodeAt(i);

   if (x === 32 || x === 44)
    {
      cipher = cipher + String.fromCharCode(x);
    }
  else {
    asciiCode = ((x - 65 + offset) % 26) + 65;
    cipher = cipher + String.fromCharCode(asciiCode);
  }

}

return(cipher);

}

/* funcion descifrar*/
const codeDecipher =(offset,string)=> {

for(let i=0; i<string.length;i++){
   x = string.charCodeAt(i);
   if (x === 32 || x === 44)
    {
      deCipher = deCipher + String.fromCharCode(x);
    }
  else {
   asciiCode = ((x + 65 - offset) % 26) + 65;

   deCipher = deCipher + String.fromCharCode(asciiCode);
  }

}

  return(deCipher);

}


/* funcion validar entrada cifrar*/
const validationInputCipher =()=>{
  cipher = '';

  let validationPhrase, validationOffset;
  validationPhrase = document.getElementById("caesarShiftString").value;
  validationOffset = document.getElementById("offsetCipher").value;


  if (validationPhrase === '' && validationOffset !== ''){
     document.getElementById("errorOffString").style.display = 'block';
     document.getElementById("errorOffString").value = '';
     document.getElementById("caesarShiftResult").value = '';
     document.getElementById("caesarShiftString").focus();

  }
    else if (validationPhrase !== '' && validationOffset === '' ){

     document.getElementById("errorOffString").style.display = 'none';
     document.getElementById("errrOffNumber").style.display = 'block';
     document.getElementById("caesarShiftResult").value = '';
     document.getElementById("offsetCipher").focus();

  }
  else if (validationPhrase === '' && validationOffset === ''){
     document.getElementById("errorOffString").style.display = 'block';
     document.getElementById("errrOffNumber").style.display = 'block';
     document.getElementById("caesarShiftResult").value = '';
     document.getElementById("caesarShiftString").focus();

  } else {
    document.getElementById("errorOffString").style.display = 'none';
    document.getElementById("errrOffNumber").style.display = 'none';

    captureCipher();}
}

/* funcion limpiar campos cifrar*/
const cleaningCipher = () =>{

  document.getElementById("caesarShiftString").value = '';
  document.getElementById("offsetCipher").value = '';
  document.getElementById("caesarShiftResult").value = '';
  document.getElementById("errorOffString").style.display = 'none';
  document.getElementById("errrOffNumber").style.display = 'none';
  document.getElementById("caesarShiftString").focus();


}

/* funcion validar entrada descifrar*/
const validationInputDecipher =()=>{
    deCipher = '';
    let validationPhrase, validationOffset;
    validationPhrase = document.getElementById("caesarShiftString").value;
    validationOffset = document.getElementById("offsetCipher").value;

    if (validationPhrase === '' && validationOffset !== ''){
       document.getElementById("errorOffString").style.display = 'block';
       document.getElementById("errrOffNumber").value = '';
       document.getElementById("caesarShiftResult").value = '';

    }
      else if (validationPhrase !== '' && validationOffset === '' ){

       document.getElementById("errorOffString").style.display = 'none';
       document.getElementById("errrOffNumber").style.display = 'block';
       document.getElementById("offsetCipher").value = '';

    }
    else if (validationPhrase === '' && validationOffset === ''){
       document.getElementById("error").style.display = 'block';
       document.getElementById("errrOffNumber").style.display = 'block';
       document.getElementById("caesarShiftResult").value = '';

    } else {
      document.getElementById("errorOffString").style.display = 'none';
      document.getElementById("errrOffNumber").style.display = 'none';

      captureDecipher();
    }

  }
