/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */
const compareNumbers = (val1, val2) => {
    if (+val1 <= +val2) {
        console.log(true)
    }
}


let myVariable1 = 10
let myVariable2 = '5'

// Напишите код здесь
console.log('First comparation')
compareNumbers(myVariable1, myVariable2)

myVariable1 = '20'
myVariable2 = 100

// Напишите код здесь
console.log('Second comparation')
compareNumbers(myVariable1, myVariable2)
