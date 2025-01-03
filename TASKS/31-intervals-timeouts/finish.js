/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */


//option 1
let index = 1
const interval = setInterval(() => {
    if (index === 5) {
        clearInterval(interval)
    }
    console.log(`Message number ${index}`)
    ++index
}, 2000)


//option 2
// let index = 1
// const interval = setInterval(() => {
//     console.log(`Message number ${index}`)
//     ++index
// }, 2000)

// setTimeout(() => clearInterval(interval), 11000)