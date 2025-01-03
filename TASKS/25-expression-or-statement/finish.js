/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15

const myObject = { //statment
  x: 10,
  y: true,
}

myObject.z = 'abc' //expression

delete myObject.x //statment

let newVariable //expression

newVariable = 30 + 5 //expression

console.log(newVariable) //expression-statmenbt

if (newVariable > 10) { //statmebt
  console.log(`${newVariable} больше 10`)//expression-statmenbt
}
