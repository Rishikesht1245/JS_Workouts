//1. Write a JavaScript function to convert a binary number to a decimal number.
function bin_to_dec(binary){
      let decimal = 0;
      let binLen = binary.length;
      for (let i = binLen-1; i >= 0; i--){
            if(binary[i] == '1'){
                  decimal += Math.pow(2,binLen-1-i)*binary[i];
            }
      }
      return decimal;
}

console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));

// using parseInt
function bin_to_dec1(bin){
      console.log('conversion using parseInt method : ' +parseInt(bin,2));
}

bin_to_dec1('1000');