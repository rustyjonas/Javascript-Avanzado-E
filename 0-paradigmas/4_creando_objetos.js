

((c, d) => {
    //Formas de crear un objeto

    //1. Objeto Literal
    c('***********Objeto Literal***********')

    const perro = {
        nombre: 'kEnai',
        edad: 4,
        raza: 'Mestizo',
        genero: 'Macho',
        esterilizado: true,
        ladrar () {
            c('guauuu guauuuu!')
        },
        comer(comida = 'croqueta'){
            c(`${this.nombre} come${comida}`)
        },
        aparecer(imagen){
          d.write(`<img src="${imagen}">`)
        }
    }
    c(
        perro,
        perro.nombre,
        perro.edad,
        perro.raza,
        perro.genero,
        perro.esterilizado
    )

    perro.ladrar()
    perro.comer();
    perro.comer('tacos')
    // perro.aparecer()

    //2. Prototipo Object
    c('***********Prototipo Object***********')
    const perro2 = new Object()
    perro2.nombre = 'Firulais'
    perro2.edad = 2
    perro2.raza = 'Dalmata'
    perro2.genero = 'Macho'
    perro2.eterilizado = false
    perro2.ladrar = () => c('guauu guauuu!')
    perro2.comer = function(comida = 'croqueta') {
        c(`${this.nombre} come ${comida}`)
    }
    perro2.aparecer = imagen => d.write(`<img src="${imagen}">`);
    perro2.ladrar();
    perro2.comer();
    
    //3. Funcion Constructora
    c('***********Funcion Constructora***********');
    function Perro(nombre, edad, raza, genero, esterilizado) {
        //atributos
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.genero = genero;
        this.esterilizado = esterilizado;

        //metodos
        this.ladrar = () => c('guau guauu!!!');

        this.comer = (comida) => c(`${this.nombre} come ${comida}`);

        this.aparecer = (imagen) => d.write(`<img src="${imagen}">`);
    }

    const perro3 = new Perro('Laza', 10, 'Gran Danes', 'Macho', false),
        perro3_2 = new Perro('Lola', 7, 'Border Collie', 'Hembra', true);
        c(
            perro3,
            perro3.nombre,
            perro3.edad,
            perro3.raza,
            perro3.genero,
            perro3.esterilizado,
            perro3_2,
            perro3_2.nombre,
            perro3_2.edad,
            perro3_2.raza,
            perro3_2.genero,
            perro3_2.esterilizado
        )
    //4. Clases apartir de ES6
    c('***********Clases apartir de ES6***********')
    class Dog{
            //El constructor es un metodo especial que se ejecuta en el momento de
            //instanciar la clase
         constructor(nombre, edad, raza, genero, esterilizado){
             //atributos
             this.nombre = nombre;
             this.edad = edad;
             this.raza = raza;
             this.genero = genero;
             this.esterilizado = esterilizado;
         }
        //metodos
        ladrar(){
             c('guau guauu!!!')
        }
        comer(comida) {
            c(`${this.nombre} come ${comida}`);
        }
        // aparecer(imagen){
        //      d.write(`<img src="">`)
        // }
    }
    c(Dog('sd',3,2,3,4))
})(console.log, document);
