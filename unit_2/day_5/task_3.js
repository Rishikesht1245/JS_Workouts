//3. Write a JavaScript function to validate whether a given value type is boolean or not. Without regular expression.

function checkBoolean(bool){
      if(typeof bool == 'boolean'){
            console.log(`The entered value is a boolean`);
      }
      else{
            console.log(`The entered value is not a boolean`);
      }
}

checkBoolean(5);
checkBoolean(true);
checkBoolean('boolean');