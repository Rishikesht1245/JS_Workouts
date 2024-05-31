//4. Write a JavaScript function to validate whether a given value type is a pure JSON object or not, without regular expression.

function checkJSON(jsonData){
      // JSON.parse() will retun errro if we try to parse non JSON data
      try{
            JSON.parse(jsonData);
      }
      catch(error){
            return false;
      }
      return true;
}

function isJSON(data){
      if(checkJSON(data)){
            console.log('The entered data is in valid JSON format');
      }
      else{
            console.log('The entered data is not in valid JSON format');
      }
}

let data = '{"name": "John", "age": 30, "city": "New York"}';
let data1 = 'I am not a valid json';
isJSON(data);
isJSON(data1);

