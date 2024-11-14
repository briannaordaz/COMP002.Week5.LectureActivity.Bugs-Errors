myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

// the loop has to start at 0, changed i = 1 to i = 0
//  changed "i <= myGrades.length" to "i <= 6" because 6 is the total length of the code (since it starts at 0 and ends at 6) and the output can be less than or equal to one of the array numbers 
for (let i = 0; i <= 6; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage); // output: 88.71428571428571