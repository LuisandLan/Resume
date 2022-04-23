//var name = 'ruslan'
const isProgrammer = true
name = 'Ruslan'
const lastName= prompt('введите фамилию')


//Операторы 
const currentYear = 2022
const birthYear = 2003

const age = currentYear - birthYear
console.log(age)

const a = 10
const b = 5
let c = 32
c+=a
console.log(c)
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(++currentYear)
console.log(--currentYear)


console.log(typeof age)


const fullAge = 19
const toDay = 2003 
if (fullAge === 19) {
console.log('Мне Реально 19')
}
const isRady = true
if (isRady){
    console.log('все готово ')
}else if ('все не готово'){

}
//тернарное вырожение 

isRady ? console.log('все готово'): console.log('все не готово')

//функции 
function calcyLatrAge(year) {
    return 2022 - year
}
console.log(calcyLatrAge(2019))

function logInfoAbout(name,year){
    const age = calcyLatrAge
}
if (age >0){
    console.log('человек по имени'+ name + 'сейчас имеет возраст' + age)

}



//массивы
const cars = ['мазда','мерсс' ,'майбах' ]
//const cars = new Array( 'мазда','мерсс' ,'майбах','ford')
console.log(cars)




//циклы

//for (let i = 0; i< cars.length;i++){
//    const car =cars[i]
//    console.log(car)
//}

//так же но в меньшее кол-во строк

for (let car of cars){
    console.log(car)
}

// объекты 
const person = {
    ferstName: 'Ruslan',
    lastName: 'Gadzhiev',
    year: 2003,
    languages:['Ru','En','Az'], 

}
console.log(person.ferstName)
person.languages