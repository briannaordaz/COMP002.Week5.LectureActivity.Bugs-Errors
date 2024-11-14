let myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;
// the loop has to start at 0

for (let i = 0; i <= myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);