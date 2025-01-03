/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Напишите код здесь
//option1
str.split('').forEach((char) => {
    if (vowels.includes(char)) { //el === el.toLowerCase() && не нужен includes учитываетрегистр
        vowelsCount++
    }
})

//option2
// for (const char of str) {
//     if (vowels.includes(char)) {//char === char.toLowerCase() && 
//         vowelsCount++
//     }
// }


console.log(vowelsCount)
// 9
