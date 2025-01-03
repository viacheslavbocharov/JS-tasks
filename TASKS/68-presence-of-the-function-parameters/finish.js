/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */


function square(a) {
  
  if(typeof a === 'undefined') {
    throw new Error('Функция "square" не может быть вызвана без аргумента')
  }
  console.log(a * a)
}


try {
  square(10)
  square()  
} catch (error) {
  console.log(error.message)
}
// 100

// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
