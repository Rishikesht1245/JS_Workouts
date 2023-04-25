//5. Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers.

function lcm(numbers) {
      function gcd(a, b) {
        // If the second argument is 0, return the first argument 
        if (b === 0) {
          return a;
        }
        // Otherwise, recursively call gcd with arguments b and the remainder of a divided by b
        return gcd(b, a % b);
      }
      // Reduce the array of numbers by multiplying each number together and dividing by their gcd
      // This finds the Least Common Multiple (LCM) of the numbers in the array
      return numbers.reduce((a, b) => a * b / gcd(a, b));
    }
     

    let numbers = [100,90,80,7];
    let lcmValue = lcm(numbers);
    console.log(`LCM of ${numbers.join(', ')} is ${lcmValue}`);