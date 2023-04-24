//3.Write a JavaScript function to remove the first occurrence of a given 'search string' from a string
function removeText(str, key) {
      
      let newStr = str.replace(key,'');

      console.log(newStr);
}

removeText('The quick brown fox jumps over the lazy dog', 'the');

// using slice method of string
function removeFirstOccurence(str1, key1){

      let keyLength = key1.length;
      let keyIndex = str1.indexOf(key1);
      if(keyIndex == -1){
            return str1;
      }
      else{
            let newStr1 = (str1.slice(0, keyIndex) + str1.slice(keyIndex+keyLength));  
            console.log(newStr1);
      }
}

removeFirstOccurence('The random van comes here fastly','van');