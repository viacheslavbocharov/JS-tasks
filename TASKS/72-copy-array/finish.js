/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3]

// Напишите код здесь//
const b = [...a]
//const b = Array.from(a)

b.push('newElement')

const d = JSON.parse(JSON.stringify(a))
d.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
console.log(d)
// [1, 2, 3, "newElement"]
