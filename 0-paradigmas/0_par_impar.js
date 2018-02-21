//Codigo Frontend
function parImparFrontEnd() {
    let numero = prompt('Igresa un numero');
    modulo = numero % 2,
    par = `El numero ${numero} es Par`,
    impar = `El numero ${numero} es Impar`

    //operador ternario
    //variable = (condicion) ? verdadera : falsa
    console.log((modulo===0) ? par : impar)
}

// parImparFrontEnd();

//Codigo Backend
function parImparBackend() {
    process.stdout.write('Ingresa un numero: ')

    process.stdin.once('data', numero => {
        let modulo = numero % 2,
            par = `El numero ${numero} es Par`,
            impar = `El numero ${numero} es Impar`,
            residuo = (modulo===1) ? impar : par

        process.stdout.write(residuo)
        process.exit()
    })
}
// Run: node .\0_par_impar.js
parImparBackend()