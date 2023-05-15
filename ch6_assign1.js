
// i is equal to or greater than 10. when i is <= 10, it logs the current value of i to console.//
function count(i,myArray) {
    if (i=== myArray.length) return;
    console.log(myArray[i]);
    count(i + 1, myArray);
//below is a test for 2nd part or assignment//
    function count(i,myArray) {
        if (i=== myArray.length) return;
        console.log(myArray[i]);
        count(i + 1, myArray);
//test below only//

setTimeout(() => {
    count(0,["four", "three", "one", "two", "one"]);
  }, "5000");

//function count() {
  //clearTimeout();

//}
}

//count(0, ["four", "three", "one", "two", "one"])
}
count(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



//setTimeout(() => {
    //console.log("Delayed for 1 second.");
 // }, "1000");






