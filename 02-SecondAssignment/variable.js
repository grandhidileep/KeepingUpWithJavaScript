/**
 * Scope Hoisting:
 * when we are able to use a variable before it is declared in the same scope,
 * with out affecting the behavior when it is being used , then the variable is 
 * said to be scope hoisted. for example a varible is being used in a function 
 * before the declaration of the variable appears in the code however this does 
 * not affect the operation which are being performend on the variable then is 
 * said to be scope hoisted.
 * 
 * var:
 * declaring variable with var keyword , gives the variable function scope
 * for the variable , varible will accessible via multiple blocks of code
 * if they are in same function scope.
 * var can be used to declare string,boolean,objects,functions,numbers all supported
 * javascript objects.
 * 
 */

//example demonstarting variable usage and scope hoisting

function varUsage() {
    //initializing my name to be a string
    person = "dileep";
    console.log(person);
    //re-assigning an array to the same variable would work just fine 
    person = ["Dileep", "Kumar", "Grandhi"];
    console.log(person);
    //re-assigning the same variable to an object
    person = {
        firstName: "Dileep",
        lastName: "Grandhi",
        middleName: "Kumar",
    }
    console.log(person);
    var person;

}

varUsage();
// console.log(person);
/**
 * When we initialize variable with let and const they are blockscoped.
 * 
 * const: is preferred over let when my value of my variable is not going
 * to change or it is constant. however it block scoped , we cannot change 
 * reference to the object it was initialized to but however we can modify
 * the content of the object. incase of primitives we are not allowed to modify
 * the value of a constant.
 * 
 * let: when we define a variable with let it block scope not function scoped,
 * it will be only accessible in the block or all the child-blocks which are present
 * in the scope.
 */


let lenNConstDemo = function () {
    let outerBlock = "outerBlock";
    if (true) {
        let innerBlock = "innerBlock";
        console.log(`outerBlock varible value ${outerBlock} 
  and innerBlock variable value is ${innerBlock}`);
        //if it is further nested outerblocks values are accessible
        {
            let furthernesting = "InnerofInnerBlock"
            console.log(`outerBlock varible value ${outerBlock} 
  ,innerBlock variable value is ${innerBlock}
  ,further nested value is ${furthernesting}`);
        }
        /*execution of the below statement give error
         console.log(`outerBlock varible value ${outerBlock} 
         ,innerBlock variable value is ${innerBlock}
         ,further nested value is ${furthernesting}`); 
        */
    }
    //value modified in the inner block is accessible here.
    console.log(objectConst);
    console.log(`objectConst ${arrayConst}`);
}
lenDemo();

const constDemo = function () {
    const primitiveConst = "Constantant String";
    const objectConst = {
        firstName: "Dileep",
        lastName: "Grandhi",
        middleName: "Kumar",
    };
    const arrayConst = ["Dileep", "Kumar", "Grandhi"];
    if (true) {
        arrayConst[2] = "Modified";
        arrayConst[5] = "inserted in outer Block";
        objectConst["innerBlock"] = "property added";
        objectConst.middleName = "Middle Name Modified";
        console.log(`objectConst ${objectConst}`);
        console.log(`objectConst ${arrayConst}`);

        {
            const innerMostConst="Primitive value const";
            objectConst.middleName = "further Modified";
            arrayConst[2] = "Modified in Inner Block";
            arrayConst[4] = "inserted in inner block";
            objectConst["furtherInnerBlock"] = "property added innermost block";
            console.log(`outerBlockPrimitive ${primitiveConst} 
            innerblockPrimitive ${innerMostConst}`);
        }

        /**
         * executing this throws
         *  console.log(`outerBlockPrimitive ${primitiveConst} 
         * innerblockPrimitive ${innerMostConst}`);
         * 
         */
    }
}