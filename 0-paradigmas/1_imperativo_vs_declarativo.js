const numbers  = [1, 2, 3, 4, 5]

/* Codigo Imperativo */

console.time('Imperativo')
function squared(numbers) {
    let arr = []
    for ( let i = 0; i < numbers.length; i++ ){
        arr.push(numbers[i] * numbers[i])
    }
    return console.log(arr)
}
squared(numbers)
console.timeEnd('Imperativo')

/* Codigo Declarativo */
console.time('Declarativo')

console.log( numbers.map( num => num * num) )

console.timeEnd('Declarativo')