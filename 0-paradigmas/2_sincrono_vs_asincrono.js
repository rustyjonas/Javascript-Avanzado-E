const fs = require('fs'),
    file = './assets/archivo.txt'

    /* Codigo Sicrono*/
    console.time('Sicrono')

    console.log( '\nAbriendo Archivo...')

    let content

    try{
        content = fs.readFileSync(file, 'utf8')
        console.log(content)
    }catch (err){
         console.log(err.message)
    }

    console.log('\nHaciendo otra cosa\n')

    console.log('\nHaciendo otra cosa mas\n')

    console.timeEnd('Sicrono')

/* Codigo Asincrono*/
console.time('Asincrono')

console.log( '\nAbriendo Archivo...')

 content = fs.readFile(file , 'utf8' , (err, content) => (err) ? console.log
(err.message) : console.log(content))

console.log('\nHaciendo otra cosa\n')

console.log('\nHaciendo otra cosa mas\n')

console.timeEnd('Asincrono')