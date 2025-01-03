/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

const isAllElementsNumber = (arr) => arr.every(el => typeof (el) === 'number')
// console.log(isAllElementsNumber(a))
// console.log(isAllElementsNumber(b))

const isArrSortedByMax = (arr) => {
    let res = true
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > arr[index + 1]) {
            res = false
            break
        }

    }
    return res
}

const isArrSortedByMin = (arr) => {
    return isArrSortedByMax([...arr].reverse())
}


const arraySortInfo = (arr) => {
    if (!isAllElementsNumber(arr)) {
        return "Некоторые элементы не являются числами"
    } else if (isArrSortedByMax(arr)) {
        return "Массив отсортирован по возрастанию"
    } else if (isArrSortedByMin(arr)) {
        return "Массив отсортирован по убыванию"
    } else {
        return "Массив не отсортирован"
    }
}




console.log(arraySortInfo(a)) // Некоторые элементы не являются числами
console.log(arraySortInfo(b)) // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)) // Массив отсортирован по убыванию
console.log(arraySortInfo(d)) // Массив не отсортирован

/**
 * ПОДСКАЗКИ
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Подсказка 1: Используйте метод массивов "every"
 * Подсказка 2: Вы должны использовать два параметра в колбэк функции "element", "index"
 * Подсказка 3: Каждый элемент массива, кроме первого, следует сравнивать с предыдущим
 */
