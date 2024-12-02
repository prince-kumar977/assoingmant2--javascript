//console.log("hello wold");

// Q1.Find Grades
// Your school has the following grading system based upon the marks (M) obtained by a student:
//  If M≤10, the grade will be E.
//  If 11≥M≤20, the grade will be D.
//  If 21≥M≤30, the grade will be C.
//  If 31≥M≤40, the grade will be B.
//  If 41≥M≤50, the grade will be A.
// Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement.
// Note: You have to complete findGrades function. No need to take any input.
// Input Format
// The first and the only line of the input contain an integer M, representing the marks that your friend will enter in the grading system.
// Output Format
// Return the grade obtained by your friend.
// Constraints
// 0≤M≤50
// Example
// Sample Input
// 1
// Sample Output
// E

//-------------------------------------------------


// function findGrades(m){
//     let grades;
//     switch(true){
//         case(m <= 10):
//         grades= "E";
//         break;

//         case(m=> 11 && m <= 20):
//         grades ="D";
//         break;

//         case(m >= 21 && m <= 30):
//         grades = "C";
//         break;

//         case(m>=31 && m<=40):
//         grades = "B";
//         break;

//         case(m>=41 && m<=50):
//         grades = "A";
//         break;
//         default:
//             grades = "invalid";


//     }
//     return grades;
// }
// const marks = 1;
// console.log(findGrades(marks));

//-------------------------------------------------

// Q2. Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the 
// table corresponding to an input character and return it.
// | P or p - PrepBytes |
// | Z or z - Zenith |
// | E or e - Expert Coder |
// | D or d - Data Structure |
// Note: You have to complete getValue function. No need to take any input.
// Input Format
// The first and the only line of the input contain a character C, representing the character that you will get in input.
// Output Format
// Return the value corresponding to the input character.
// Constraints
// C will be one of the following characters: [P, p, Z, z, E, e, D, d].
// Example
// Sample Input
// E
// Sample Output
// Expert Coder



//-------------------------
function getValue(c){
    const values = {
        'p': " PrepBytes",
        "P":  "PrepBytes",
        "z":  "Zenith",
        "Z": "Zenith",
        "e":  "Expert Coder",
        "E": "Expert Coder",
        "d":  "Data Structure",
        "D":  "Data Structure",
};
    return values[c];

}
const inputcharacter = "d"
console.log(getValue(inputcharacter));

  




//---------------------------

// Q3. Find the maximum out of three numbers.
// Take three numbers and print the largest number among them if all of three are same print −1−1.
// Note: You have to complete Max_out_of_three. No need to take any input.
// Input Format
// The input contains three numbers A, B and C.
// Output Format
// Return the maximum number out of the three numbers as result.
// Constraints
// 1≤A, B, C≤10000
// Example
// Sample Input
// 2 5 4
// Sample Output
// 5

//-------------------------

// function Max_out_of_three(a,b,c){
//     if(a==b&&b==c){
//         return -1;
//     }
//     return Math.max(a,b,c);

// }
// const a = 6;
// const b = 2;
// const c = 4;
// console.log(Max_out_of_three(a,b,c));


//-------------------------------------

// Q4. Second Smallest
// You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided 
// integers.
// Note: You have to complete findSndSmallest function. No need to take any input.
// Input Format
// The first and the only line of the input contains three space-separated integers X, Y, and Z, denoting the integers among which you 
// have to find the second smallest element.
// Output Format
// Return the second smallest integer among the three integers given to you.
// Constraints
// 1≤X, Y, Z≤500
// X! =Y! =, Y!=Z!=, X!=Z
// Example
// Sample Input
// 2 9 23
// Sample Output
// 9


// function  findSndSmalles(x,y,z){
// const nums =[x,y,z];
// nums.sort((a,b)=>a-b);
// return nums[1];
// }
// const x =2;
// const y= 9;
// const z = 23;
// console.log(findSndSmalles(x,y,z));


//---------------------------------------------------

// Q5. Check whether the triangle is Acute or Obtuse
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
// Note: You have to complete Triangle_Check. No need to take any input
// Input Format
// The input contains three numbers A, B and C which denotes the angles of a triangle.
// Output Format
// Return the required result.
// Constraints
// 0≤A, B, C≤180
// Example
// Sample Input
// 60 100 20
// Sample Output
// obtuse


// function  Triangle_Check(a,b,c){
//     if(a + b + c !==180||a<=0||b<=0||c<=0){
//         return "invalid angles";
//     }

//     if(a < 90 && b < 90 && c < 90){
//         return "acurate";
    
//     }else{
//         return 'obtuse';
//     }
// }
// const angles = [60,100,200];
// console.log(Triangle_Check(...angles));

