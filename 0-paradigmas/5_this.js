((c)=>{
    c('**********Asignacion de this Implicita**********')

    let yo = {
        nombre: 'Jonathan Mircha',
        edad: 33,
        saludar: function () {
            c(`Hola mi nombre es ${this.nombre}`)
        }
    }
    yo.saludar()
    //Caso 2
        //existe una funcion que recibe un objeto como parametro, dentro de ella
        // se le asigna un metodo al objeto
        //this en este caso hace referencia al objeto que se le añade

    let preparandoSaludo = function (obj) {
        obj.saludar = function () {
            c(`Hola mi nombre es ${this.nombre}`)
        }
    }
    const jon = {
        nombre: 'Jonathan',
        edad: 32
    }, alvaro = {
        nombre: 'Alvaro',
        edad: 37
    }

    preparandoSaludo(jon)
    preparandoSaludo(alvaro)

    jon.saludar()
    alvaro.saludar()

    //Caso 3
    //una funcion que retorna un objeto, que contiene un metodo que
    let Humano = function (nombre, edad, perro) {
        return{
            nombre: nombre,
            edad: edad,
            saludar : function () {
                c(`Hola mi nombre es ${this.nombre}`)
            },
            perro: {
                nombre: perro,
                saludar: function () {
                    c(`${this.nombre} guauu guauu!!!`)
                }
            }
        }
    }
    const mircha = Humano('Jonathan', 33 , 'kEnai');
    mircha.saludar()
    mircha.perro.saludar()
    //Conclusion: this es invocado dentro de un metodo, implicitamente este hace
    //referencia al objeto que contiene el metodo, sin importar si el metodo es
    // añadido luego de haber sido creado el objeto, o si es una funcion que
    // retorna un objeto
})(console.log);

((c) =>{

    c('******Asignacion de this Excplicita******')

    const nombrar = function ( f1, f2, f3){
        c(`${this.nombre} es el lenguagje Front end de la Web y tiene librerias y 
        frameworks muy poderosos como: ${f1}, ${f2}, ${f3}`)
    }

    const lenguaje = {
        nombre: 'JavaScript',
        version: 6
    }

    let frameworks = ['Angular', 'React', 'Vue.js']

    /*
    * call: Permite definir a que va a hacer referencia this, en su primer
    * parametro, los parametros siguientes son los que recibe la funcion
    * */
    nombrar.call (lenguaje, frameworks[0], frameworks[1], frameworks[2])
    /*
    * apply: Permite referenciar this en el primer parametro, pero este nos
    * permite pasar un array, como los parametros de la funcion
    * */
    nombrar.apply( lenguaje, frameworks)
    /*
    * bind: devuelve una funcion, en donde this, hace referencia al objeto que pasamos
    * en su parametro
    * */
    let frameworksJS = nombrar.bind( lenguaje, frameworks[0], frameworks[1],
        frameworks[2] )
        frameworksJS()
})(console.log);
((c) =>{
    c('******Asignacion con new ******');
    let Framework = function (nombre, url, lenguaje){
        this.nombre = nombre
        this.url = url
        this.lenguaje = lenguaje
    }
    const react = new Framework('React' , 'https://facebook.github.io/react/',
        'JavaScript'),
        vue = Object.create(Framework)
    vue.nombre = 'Vue.js'
    c(react, vue)
})(console.log);

((c) =>{
    c('******Asignacion Global******')
    const dimeUnFramework = function (){
        c(this.nombre)
    }

    dimeUnFramework()
    // nombre = 'Angular'
    window.nombre = 'Angular'
    dimeUnFramework()
})(console.log);

((c) =>{

})(console.log);