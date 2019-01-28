//declaring a array to contain group of people.
const men = ['socrates', 'someoneelse', 'someone'];

//function which checks mortality give name as input for function
const isMortal = function (person) {
    return typeof (person) == 'string' ? men.indexOf(person.toLowerCase()) !== -1 : false;
}

console.log(`socrates is mortal ? ${isMortal('socrates')}`);

console.log(`111 is mortal ? ${isMortal(111)}`);


//EXTRA credit homework.

//declaring constructor create new cake when give type of cake as boolean.

const CreateCake = function (isVanilla, isChocolate) {
    this.isChocolate = isChocolate;
    this.isVanilla = isVanilla;
}

//creating cakes of different types .

let vanillaCake = new CreateCake(true, false);
let chocolateCake = new CreateCake(false, true);
//function which accepts cake object and returns type of cake it is.
const returnCakeType = (cakeTypes, cake) => {
    let cakeType;
    if (cake.isChocolate) {

        cakeTypes.forEach(element => {
            if (element === 'chocolate')
                cakeType = element;
        });

    } else {
        cakeTypes.forEach(element => {
            if (element !== 'chocolate')
                cakeType = element;
        });
    }
    return cakeType;
}


console.log(`This is a ${returnCakeType(['chocolate','vanilla'],vanillaCake)} cake`);
console.log(`This is a ${returnCakeType(['chocolate','vanilla'],chocolateCake)} cake`);