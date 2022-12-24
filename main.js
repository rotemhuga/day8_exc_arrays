//class practice
// let array = [`Django`, `Tuesday`, `Thursday`, `Friday`, `saturday`, `Titanic`]
// let movies = []
// const remove = array.shift ();
// movies.push (remove) 
// // console.log(array)
// // console.log(movies)
// array.unshift (`monday`)
// // console.log(array)
// const Titanic = array.pop ();
// movies.push (Titanic) 
// // console.log(array)
// // console.log(movies)
// array.push (`sunday`)
// console.log(array)

// Geek Out - Arrays
// EX1 -1
function arraynumbers (array) {
    array.pop ();
    array.shift ();
    return array;
}
console.log(arraynumbers([1, 2, 3]));

//2
function adding (numbers){
    numbers.unshift ("one")
    numbers.push ("six")
    return numbers
}
console.log(adding(["two", "three", "four", "five"]));

//3
function includeNumber (array2) {
    return array2.includes(5)
}
console.log(includeNumber([1, 4, 8]))

//4
function concating (arrayOne, arrayTwo) {
    // let arrayOne = [1, 2, 3]
    // let arrayTwo = [4, 5, 6]
    let arrayThree = arrayOne.concat(arrayTwo);
    return arrayThree
}
console.log(concating([1, 2, 3],[4, 5, 6]));

//5
function includeNumber2 (array2, n) {
    return array2.includes(n)
}
console.log(includeNumber2([1, 7, 6], 7));

//6
function stringS (array3, s) {
    return array3.indexOf(s)
}
console.log(stringS(["hello", "how", "are"], "are"));

//7
function reverseNumber (numbers) {
    return numbers.reverse ()
}
console.log(reverseNumber([1, 2, 3]));

//8
function revBetween (numbers1) {
    if (numbers1.length >= 5 && numbers1.length <= 10 ) {
        return numbers1.reverse ()
    }
}
console.log(revBetween([1, 2, 3, 4, 5 ]));

//9
function removedReverse (numbers2, n) {
    if (numbers2.includes(n)) {
        numbers2.shift 
        return numbers2.reverse ()
    }
    return numbers2 
}

//10
function numberClone (origin) {
    // let origin = [1, 2, 4, 0];
    let clone = [...origin];
    return clone;
}
console.log(numberClone ([1, 2, 4, 0]))

function numberClone1 (origin) {
    let clone = [...origin];
    return clone;
}
console.log(numberClone1 ([1, 2, [4, 0]]))

//11
function cutingElements (array4, num) {
    let cut = array4.slice (0, num)
    return cut
}
console.log(cutingElements ([1, 2, 3], 3))

//12 
function cutingElements2 (array5, num) {
    let cut = array5.slice (-num)
    return cut
}
console.log(cutingElements2 ([1, 2, 3], 1))

//13
function CheckEqual (array) {
    if (array.at(0) === array.at(-1)){
    return true;
    }
     else {
    return false;
    }
}
    console.log (CheckEqual([1, 2, 3, 4, 10]));

    function CheckEqual (array) {
    if (array.at(0) === array.at(-1)){
        return array.length -2;
    } else {
        return false;
    }
    }
       console.log(CheckEqual ([1, 2, 3, 4, 5, 1]))


    //Ex2 -
    let weirdArray = [`Inception`, `Spiderman`, `Tuesday`]
    let weirderArray = [`Green`, `Saturday`, `Friday`, `wednesday`]
   
    console.log(weirderArray.reverse ()) 
   
    let ArrayThree = weirdArray.concat(weirderArray)
    // console.log (ArrayThree)
    let movies = ArrayThree.slice(2)
    // console.log (movies)
    movies.splice(2,0,`Thursday`)
    // console.log (movies)
    let colors = movies.at(-1)
    // console.log (colors)
    movies.pop ();
    // console.log (movies)
    movies.push ("sunday");
    // console.log (movies)
    let weekend = movies.slice (0,3)
    // console.log (weekend)

    //EX3 - 1
    let practiceFile = [273.15]
    practiceFile.push(42);
    console.log (practiceFile)
    practiceFile.push("hello");
    console.log (practiceFile)
    practiceFile.push(false, -4.6, "87");
    console.log (practiceFile)

    //EX3 - 2
    let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket' ]
    cargoHold.splice(5, 1, `space tether`);
    console.log (cargoHold)
    cargoHold.pop ();
    console.log (cargoHold)
    cargoHold.shift ();
    console.log (cargoHold)
    cargoHold.unshift (1138);
    console.log (cargoHold)
    cargoHold.push ("20 meters");
    console.log (cargoHold)
    console.log(`The cargoHold contain [${cargoHold}] and his length is ${cargoHold.length}`)

    //EX3 - 3
    cargoHold.splice (3, 0, `keys`);
    console.log (cargoHold)
    cargoHold.splice (4, 1);
    console.log (cargoHold)
