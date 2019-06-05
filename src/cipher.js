
   window.cipher = {
     /* inicializando variables */
     let x, asciiCode, offsetC, offsetD, stringCipher = '', cipher = '',deCipher= '', returnCipher, stringDecipher = '', returnDecipher;


     /* Focus en textarea*/
     const init = () =>
     {
      document.getElementById("textCipher").focus();

     }



     /* capturando la frase a cifrar*/
     const captureCipher=()=>{

     stringCipher= document.getElementById("textCipher").value;

     stringCipher = stringCipher.toUpperCase().trim();


     /* offset de cifrado*/
     offsetC = parseInt(document.getElementById("offsetCipher").value);

      returnCipher =  codeCipher(offsetC,stringCipher);
      document.getElementById("resultCipher").value = returnCipher;
     }


     /* capturando la frase a descifrar*/
     const captureDecipher=()=>{

         stringDecipher= document.getElementById("textCipher").value;
         stringDecipher = stringDecipher.toUpperCase().trim();


         /* offset descifrar*/
         offsetD = parseInt(document.getElementById("offsetCipher").value);

         returnDecipher =  codeDecipher(offsetD,stringDecipher);
          document.getElementById("resultCipher").value = returnDecipher;
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
       validationPhrase = document.getElementById("textCipher").value;
       validationOffset = document.getElementById("offsetCipher").value;


       if (validationPhrase === '' && validationOffset !== ''){
          document.getElementById("Error1").style.display = 'block';
          document.getElementById("Error1").value = '';
          document.getElementById("resultCipher").value = '';
          document.getElementById("textCipher").focus();

       }
         else if (validationPhrase !== '' && validationOffset === '' ){

          document.getElementById("Error1").style.display = 'none';
          document.getElementById("Error2").style.display = 'block';
          document.getElementById("resultCipher").value = '';
          document.getElementById("offsetCipher").focus();

       }
       else if (validationPhrase === '' && validationOffset === ''){
          document.getElementById("Error1").style.display = 'block';
          document.getElementById("Error2").style.display = 'block';
          document.getElementById("resultCipher").value = '';
          document.getElementById("textCipher").focus();

       } else {
         document.getElementById("Error1").style.display = 'none';
         document.getElementById("Error2").style.display = 'none';

         captureCipher();}
     }

     /* funcion limpiar campos cifrar*/
     const cleaningCipher = () =>{

       document.getElementById("textCipher").value = '';
       document.getElementById("offsetCipher").value = '';
       document.getElementById("resultCipher").value = '';
       document.getElementById("Error1").style.display = 'none';
       document.getElementById("Error2").style.display = 'none';
       document.getElementById("textCipher").focus();


     }

     /* funcion validar entrada descifrar*/
     const validationInputDecipher =()=>{
         deCipher = '';
         let validationPhrase, validationOffset;
         validationPhrase = document.getElementById("textCipher").value;
         validationOffset = document.getElementById("offsetCipher").value;

         if (validationPhrase === '' && validationOffset !== ''){
            document.getElementById("Error1").style.display = 'block';
            document.getElementById("Error2").value = '';
            document.getElementById("resultCipher").value = '';

         }
           else if (validationPhrase !== '' && validationOffset === '' ){

            document.getElementById("Error1").style.display = 'none';
            document.getElementById("Error2").style.display = 'block';
            document.getElementById("offsetCipher").value = '';

         }
         else if (validationPhrase === '' && validationOffset === ''){
            document.getElementById("Error1").style.display = 'block';
            document.getElementById("Error2").style.display = 'block';
            document.getElementById("resultCipher").value = '';

         } else {
           document.getElementById("Error1").style.display = 'none';
           document.getElementById("Error2").style.display = 'none';

           captureDecipher();
         }

       }

   };
