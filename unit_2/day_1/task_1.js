//1.Write a JavaScript function to check whether an `input` is a string or not.

function isString(str){
      let str1 = typeof(str);
      if( str1 === 'string')
            return true;
      
      else
            return false;    
}

console.log(isString('w3resourse'));