//following code demonstrates fizz ,buzz and prime;
/**
 * @param {*} num  
 * checks whether num is prime and returns boolean if it is prime.
 */
const checkPrime =function(num){
    const checkTill=num/2 ;
    //return false for 1 since its not a prime number
    if(num<2){
        return false;
    }
    for(let i=2;i<=checkTill;i++){
        if(num%i ==0)
            return false
    }
    return true;
}

/**
 * following function prints fizz,buzz,prime and number.
 *  
 */

const fizzBuzz = function(){
    for(let i=1;i<=100;i++){
        if(i%15 == 0){
            console.log("fizzBuzz");
        }
        else if(i%3==0){
            console.log("fizz");
        }else if(i%5 == 0){
            console.log("Buzz");
        }else if(checkPrime(i)){
            console.log("prime");
        }else{
            console.log(i);
        }
    }
}