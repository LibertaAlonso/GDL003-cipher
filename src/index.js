/***************************/
/* Inicializando variables */
/***************************/
let offsetC,offsetD,stringCipher = '',returnCipher,stringDecipher = '',returnDecipher;


/******************************/
/*Capturamos la frase a cifrar*/
/*******************************/
const captureCipher=()=>{

stringCipher= document.getElementById("caesarShiftString").value;
stringCipher = stringCipher.toUpperCase().trim();

/********************/
/* offset de cifrado*/
/********************/

 offsetC = parseInt(document.getElementById("offsetCipher").value);
 returnCipher =  encode(offsetC,stringCipher);
 document.getElementById("caesarShiftResult").value = returnCipher;
};

/*********************************/
/*Capturando la frase a descifrar*/
/*********************************/
const captureDecipher=()=>{

    stringDecipher= document.getElementById("caesarShiftString").value;
    stringDecipher = stringDecipher.toUpperCase().trim();

/*******************/
/* offset descifrar*/
/*******************/

    offsetD = parseInt(document.getElementById("offsetCipher").value);
    returnDecipher =  decode(offsetD,stringDecipher);
     document.getElementById("caesarShiftResult").value = returnDecipher;
   };


/******************/
/* Funcion cifrar*/
/******************/

/*const encode=(offset,string)=> {

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

};*/
/*******************/
/*Funcion descifrar*/
/*******************/

/*const decode =(offset,string)=> {


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

};*/



/*********************************/
/* Funcion validar entrada cifrar*/
/*********************************/

const validationInputCipher =()=>{

    validationOffset = document.getElementById("offsetCipher").value;

/*  let validationString, validationOffset;
  validationString = document.getElementById("caesarShiftString").value;
  validationOffset = document.getElementById("offsetCipher").value;*/


  if (validationString === '' && validationOffset !== ''){
     document.getElementById("errorOffString").style.display = 'block';
     document.getElementById("errorOffString").value = '';
     document.getElementById("caesarShiftResult").value = '';
     document.getElementById("caesarShiftString").focus();

  }
    else if (validationString !== '' && validationOffset === '' ){

     document.getElementById("errorOffString").style.display = 'none';
     document.getElementById("errrOffNumber").style.display = 'block';
     document.getElementById("caesarShiftResult").value = '';
     document.getElementById("offsetCipher").focus();

  }
  else if (validationString === '' && validationOffset === ''){
     document.getElementById("errorOffString").style.display = 'block';
     document.getElementById("errrOffNumber").style.display = 'block';
     document.getElementById("caesarShiftResult").value = '';
     document.getElementById("caesarShiftString").focus();

  } else {
    document.getElementById("errorOffString").style.display = 'none';
    document.getElementById("errrOffNumber").style.display = 'none';

    captureCipher();
  }
};

let validationString,validationOffset;
validationString = document.getElementById("buttonEncode");
validationString.addEventListener("click", validationInputCipher);




/********************************/
/*Funcion limpiar campos cifrar*/
/********************************/
const cleaningCipher = () =>{

  document.getElementById("caesarShiftString").value = '';
  document.getElementById("offsetCipher").value = '';
  document.getElementById("caesarShiftResult").value = '';
  document.getElementById("errorOffString").style.display = 'none';
  document.getElementById("errrOffNumber").style.display = 'none';
  document.getElementById("caesarShiftString").focus();

};

let cleanCipher;
cleanCipher = document.getElementById("buttonClean");
cleanCipher.addEventListener("click", cleaningCipher);


/************************************/
/* Funcion validar entrada descifrar*/
/************************************/
const validationInputDecipher =()=>{
    //deCipher = '';
    let validationString, validationOffset;
    validationString = document.getElementById("caesarShiftString").value;
    validationOffset = document.getElementById("offsetCipher").value;

    if (validationString === '' && validationOffset !== ''){
       document.getElementById("errorOffString").style.display = 'block';
       document.getElementById("errrOffNumber").value = '';
       document.getElementById("caesarShiftResult").value = '';

    }
      else if (validationString !== '' && validationOffset === '' ){

       document.getElementById("errorOffString").style.display = 'none';
       document.getElementById("errrOffNumber").style.display = 'block';
       document.getElementById("offsetCipher").value = '';

    }
    else if (validationString === '' && validationOffset === ''){
       document.getElementById("errorOffString").style.display = 'block';
       document.getElementById("errrOffNumber").style.display = 'block';
       document.getElementById("caesarShiftResult").value = '';

    } else {
      document.getElementById("errorOffString").style.display = 'none';
      document.getElementById("errrOffNumber").style.display = 'none';

      captureDecipher();
    }

  };

  validationString = document.getElementById("buttonDecode");
  validationString.addEventListener("click", validationInputDecipher);
