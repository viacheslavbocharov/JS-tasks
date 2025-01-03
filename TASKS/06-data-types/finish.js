/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

let string = 'sting'
let number = 1
let boolean = true
let nothing = null
let undefinedVar = undefined
const object = {
    propertyOne: 'some value',
    propertyTwo: 23,
    propertyThree: [],
    propertyFour: {
        one: 1,
        two: []
    }
}
let arr = []

console.log(typeof(string))
console.log(typeof(number))
console.log(typeof(boolean))
console.log(typeof(nothing))
console.log(typeof(undefinedVar))
console.log(typeof(object))
console.log(typeof(arr))

