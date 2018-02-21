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