/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

const cityInfo = (arr, cityName) => {
    if (arr.includes(cityName)) {
        const index = arr.indexOf(cityName)
        return console.log(`${cityName} is at the index ${index} in the myCities array`)
    }
    return console.log(`There is no "${cityName}" in the array`)
}




const cityInfo2 = (city, index) =>
    console.log(`${city} is at the index ${index} in the myCities array`)

myCities.forEach((city, index) => cityInfo2(city, index))

cityInfo(myCities, 'Belfast')