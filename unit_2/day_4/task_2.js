//2. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.. 

function dec_to_bho(decimal, type){
      if(type == 'B'){
            let binary = 0;
            let rem; 
            let i = 1, step =1;
            while(decimal != 0){
                  rem = decimal%2;
                  // console.log(`Step ${step++}: ${decimal}/2, Quotient = ${parseInt(decimal/2)} , Remainder =  ${rem}`);
                  binary = binary + i * rem; 
                  decimal = parseInt(decimal/2);
                  i = i*10;
            }
            console.log('Binary = '+binary);
      }

      else if(type == 'H'){
           let hex = decimal.toString(16);
            console.log('Hexadecimal = '+hex);
      }

      else if(type == 'O'){
            let oct = decimal.toString(8);
             console.log('Octal = '+oct);
       }
}

dec_to_bho(120,'B');
dec_to_bho(120,'H');
dec_to_bho(120,'O');