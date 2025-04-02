// let myHeading =  document.querySelector('h1')
// myHeading.textContent = 'Hello world!'

// 변수 선언
// var myVariable
// 값 할당
// myVariable = 10
// 변수 선언 + 할당
var myVariable = 10

// console.log(myVariable)

// ES6 이전
var myV1 = 1
// ES6 이후
let myV2 = 2
const myV3 = 3

myV1 = 10
var myV1 = 100

// let 변수는 재선언 x
myV2 = 20
// let myV2 = 200

// const 변수는 재할당 X, 재선언 x
// myV3 = 30
// const myV3 = 300

// string
let a = 'bob'
// number
let b = 10
// boolean
let c = true
// array
let d = [1, 2, 3]
// object
let e = {
    'apple': '사과',
}

// console.log(a, b, c, d, e)

// console.log(1+2)

// console.log('hello'+'world')

let varA = '10'
let varB = 10

console.log(varA == varB) // true 값만 비교
console.log(varA === varB) // false 완전히 같은지 비교
console.log(varA !== varB)


// Array
let myArray = []
myArray.push('hello')
myArray.push('world')
console.log(myArray)
myArray.pop() // 뒤부터 삭제 -> 스택 구조
console.log(myArray) 
console.log(myArray[0])


// Object
let myObject = {
    'apple': '사과',
}
console.log(myObject.apple)
myObject.grape = '포도'
console.log(myObject)


// 조건문
let iceCream = 'vanila'
if (iceCream === 'chocolate') {
    console.log('I love chocolate')
} else if (iceCream === 'vanila') {
    console.log('I love vanila')
} else {
    console.log('awww')
}


// 반복문
console.log('---while---')
let i = 0
while (i < 5) {
    console.log(i)
    // i += i
    i++
}

console.log('---for1---')
for (let i = 0 ; i<5 ; i++) {
    console.log(i)
}

let arrayA = ['a', 'b', 'c']

console.log('---for2---')
for (let i = 0 ; i < arrayA.length ; i++) {
    console.log(arrayA[i])
}

console.log('---for in---')
for (let index in arrayA) {
    console.log(index, arrayA[index]) 
}

console.log('---for of---')
for (let item of arrayA) {
    console.log(item)
}

console.log('---forEach---')
arrayA.forEach(function(item, index, array){
    console.log(item, index, array)
})


// 함수
// def func():

function multiply(num1, num2) {
    let result = num1 * num2
    return result
}
// console.log(multiply(2, 3))


// 함수 표현식
let multiply2 = function(num1, num2) {
    return num1 * num2
}
// console.log(multiply2(2, 4))


// 화살표함수
let multiply3 = (num1, num2) => {
    return num1 * num2
}
// console.log(multiply3(2, 5))

// 화살표함수 생략1
// {} 안에 코드가 return하는 문장 하나만 있다면
// {}, return을 생략 가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(3, 4))

// 화살표함수 생략2
// () 안에 매개변수가 하나만 있다면
// ()을 생략 가능
let cube = num => num ** 3
console.log(cube(10))


// 이벤트 (onclick)
// document.querySelector('html').onclick = function(){
//     alert('hello!')
// }

// 이벤트 (이벤트리스너)
// <element>.addEventListener(무슨 일이 일어났을 때, 무슨 행동을 할지)
let myH1 = document.querySelector('h1')
myH1.addEventListener('click', function(e){
    // alert('hihi')
    console.log(e)
    console.log(e.clientX, e.clientY)
})

let myImg = document.querySelector('img')
myImg.addEventListener('click', function(){
    let src = myImg.getAttribute('src')

    if (src === 'images/firefox-icon.png') {
        myImg.setAttribute('src', 'images/pochacco.jpg')
    } else {
        myImg.setAttribute('src', 'images/firefox-icon.png')
    }
})

let myInput = document.querySelector('input')
myInput.addEventListener('keydown', function(e){
    // console.log(e)
    console.log(myInput.value)
})


// 비동기
// console.log('hi')
// setTimeout(function(){console.log('1234')}, 1000)
// console.log('bye')


// request
const URL = 'https://jsonplaceholder.typicode.com/todos/1'

// 비동기 처리 방법 1 (promise)
// let response = fetch(URL)
//     .then(response => response.json())
//     .then(json => console.log(json))

// 비동기 처리 방법 2 (async await)
async function fetchTodo(url){
    let res = await fetch(url)
    let result = await res.json()
    console.log(result)
    // return result
}
console.log(fetchTodo(URL))

let liArray = document.querySelectorAll('li')
// console.log(liArray)

liArray.forEach(function(item){
    item.addEventListener('click', function(e){
        console.log(e.target)
    })
})