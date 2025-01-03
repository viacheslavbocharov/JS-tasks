// const { error } = require("console")

const { error } = require("console")

// const myCity = {
//     city: 'Alicante',
//     cityGreeting: () => console.log(`Greeting from ${myCity.city}`),
//     //cityGreeting2() { console.log(`Greeting from ${this.city}`) }
// }

// // myCity.cityGreeting()
// // myCity.cityGreeting2()
// // const myCityJSON = JSON.stringify(myCity)
// // console.log(myCityJSON)


// //МУтация объекта
// // const newMyCity = Object.assign({}, myCity) //поверхностное копированиеб вложенные объетв будут ссылаться на прежние ссылки
// // const newMyCity = {...myCity} //поверхностное копированиеб вложенные объетв будут ссылаться на прежние ссылки
// const newMyCity = JSON.parse(JSON.stringify(myCity))// подходит для глубокого копирования, НО при конвертации в JSON  функции будут произнорированы
// newMyCity.city = 'Valencia'
// console.log(myCity)
// console.log(newMyCity)


// function myFn(startValue) {
//     let counter = startValue
//     return () => { return counter++ }
// }

// console.log(myFn(1, 1))
// console.dir(myFn)

// const counter1 = myFn(4)
// const counter2 = myFn(0)

// counter1()
// counter1()
// console.log(counter1())
// console.log(counter2())

// const personOne = {
//     name: 'Bob',
//     age: 21,
//     increaseAge() { this.age += 1 }
// }

// function increasePesonAge(person) {
//     return { ...person, age: person.age + 1 }
//     // return newPerson
// }

// const updatedPersonOne = increasePesonAge(personOne)
// console.log(updatedPersonOne.age)
// personOne.increaseAge()
// console.log(personOne.age)

// setTimeout(() => {
//     console.log('Slava')
// }, 2000)


// const button = {
//     width: 200,
//     text: 'Buy',
//     color: 'yellow'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// const yellowButton = {
//     color: 'green',
//     ...button
// }

// console.log(redButton)
// console.log(yellowButton)

// const multiplictor = function (value, multiplier = 1) {
//     return value * multiplier
// }
// console.log(multiplictor(5, 2))
// console.log(multiplictor(5))


// const arrowMultiplicator = (value, multiplier = 1) => value * multiplier
// console.log(arrowMultiplicator(5, 2))
// console.log(arrowMultiplicator(5))


// const newPost = (post, addedAt = Date()) => {
//     return (
//         {
//             ...post,
//             addedAt
//         }
//     )
// }

// const firstPost = {
//     id: 1,
//     text: 'post text'
// }

// console.log(newPost(firstPost))


// const fnWithError = () => {
//     throw new Error('Some error')
// }

// try {
//     fnWithError()
// } catch (error) {
//     console.error(error)
//     console.log(error.message)
// }

// console.log('Continue...')

// const myArray = [1, 2, 3]
// const myArray2 = new Array(1, 2, 3)

// const res = myArray.forEach((el) => console.log(el * 2))
// console.log(myArray)

// const newArray = myArray.map(el => el * 3)
// console.log(newArray)

// //for cycle
// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//         continue
//     }
//     console.log(i)
// }

// const myArray3 = ['first', 'second', 'third']
// myArray3.forEach((el, index) => console.log(`${el} ${index}`))
// const result = myArray3.map(el => el + '!')
// console.log(result)

// const post = {
//     id: 1,
//     text: 'post text'
// }

// for (const key in post) {
//     console.log(key, post[key])
// }

// Object.keys(post).forEach(key => console.log(post[key]))
// const postProperties = Object.keys(post)
// console.log(postProperties)

// const postValues = Object.values(post)
// console.log(postValues)

// const myString = 'Slava'

// for (const element of myString) {
//     console.log(element)
// }

// for (const element of postValues) {
//     console.log(element)
// }

// class Comment {
//     constructor(text) {
//         this.text = text,
//             this.votesQty = 0
//     }

//     upVote() {
//         this.votesQty += 1
//     }

//     static mergeComments(first, second) {
//         return `${first} ${second}`
//     }

// }

// const firstComment = new Comment('first comment')
// const secondComment = new Comment('second comment')
// const thirdComment = new Comment('third comment')

// Comment.mergeComments('First', 'Second')

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error.message))



// const getData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))
//             .catch(error => reject(error))
//     })
// }

const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

//через IIFI самовызываюющуюся функцию
(async () => {
    try {
        const data = await getData('https://jsonplaceholder.typicode.com/todos');
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();


getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))





const timerPromise = () => {
    return new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
}

const asyncFn = async () => {
    console.log('Timer start')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}

asyncFn()
