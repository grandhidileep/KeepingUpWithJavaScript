/**
 * This file demostrates the use of if /else if and logical operatory && || and !
 */

//initializing collection men
let men = ["socrates", "dileep", "mani"];
let person = "socrates";
//checking whether socrates is part of collection men.
if (men.indexOf(person) > -1) {
    //person is part of collection men
    console.log("${person} is mortal");
} else {
    //person is not part of collection
    console.log("${person} is not mortal");
}

//check the type of cake
let vanillaCake = {
    isVanillaCake: true,
    isChocolateCake: false
};
let choclateCake = {
    isChocolateCake: true,
    isVanillaCake: false
};
checkWhichCake(vanillaCake);
checkWhichCake(choclateCake)
let checkWhichCake = function (cake) {
    if (isVanillaCake && !isChocolateCake) {
        console.log("this is not a chocolate cake");
        console.log("therefore its a vanilla cake");
    } else {
        console.log("cake is chocolate cake")
    }
}