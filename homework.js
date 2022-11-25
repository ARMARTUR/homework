//1. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
// number. If the last digit of the inserted number is 0, number remains the same.

function bringNumber(number) {
  let stringNumber = String(number)

  if (+stringNumber[stringNumber.length - 1] === 0) {
    console.log(number, 1)
  } else {
    stringNumber.toString()
    console.log(stringNumber[stringNumber.length - 1] + stringNumber.slice(0, -1))
  }

};
bringNumber(1002);














// 2.Given three numbers. Sort them by the ascending order.


function arraySort(arr){
    console.log(arr.sort())

};

arraySort([45 , 26, 78])










// 3.Given the following code rewrite it using only two if operators. (Hint: use logical
//  operators).
var n = +prompt()

let i = 0
let j = 0

if (n % 2 === 0 && !Math.floor(n / 10)) {
  i += 1

}
if (n % 3 === 0 && n % 10 === 1) {

  j += 1


}
console.log(i, j)





// 4.Write a program which will compute the area of a rectangular or a triangle after
// prompting the user to type the name of the figure name. Also check that entered
// numbers are positive.
// For the triangle entered numbers are height and and base.

let Figure = prompt('triangle or rectengle');
let HeightOfAngles = prompt('height');
let BaseOfAngles = prompt('base');


function AreaOfFigure(Figure, BaseOfAngles, HeightOfAngles) {
  if (BaseOfAngles>0 && HeightOfAngles>0) {
    if (Figure === 'triangle') {
      console.log(`${BaseOfAngles}` * `${HeightOfAngles}` / 2)
    }
    if (Figure === 'rectengle')
      console.log(`${BaseOfAngles}` * `${HeightOfAngles}`)
  }

}


AreaOfFigure(Figure, BaseOfAngles, HeightOfAngles);

//5. Given an object. Invert it (keys become values and values become keys). If there is
// more than key  given valuefor that create an array.
function reverseObject(object){

for(let key in object){
  let objectKeys=key
  key=object[key]
  object[key]=objectKeys
}
console.log(object)
}
reverseObject({a:1,b:2})