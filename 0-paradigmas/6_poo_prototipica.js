
((c)=>{
    c('******Anidación de Objetos******')

    const curso = {
        titulo: 'Curso Js Avanzado: Paradigmas de Programacion',
        docente: {
            nombre: 'Jonathan Mircha',
            edad: 33,
            nacionalidad: 'Mexicana',
            contacto: {
                email: 'jonamircha@gmail.com',
                url: 'http://jonmircha.com',
                twitter: '@jonmircha',
                ubicacion: 'CDMX'
            }
        },
        costo: 40,
        url: 'http:ed.team/cursos/javascript-avanzado',
        online: true,
        plataforma:{
            nombre: 'EDteam',
            url: 'https://ed.team',
            oficinas: [ 'Lima', 'Bogotá', 'Namekusei' ]
        }
    }
    c( curso.docente.nombre)
    c( curso['docente'].contacto['url'])
    c( curso['plataforma']['nombre'])
    c( curso.plataforma['oficinas'][2])
})(console.log);

((c)=>{
    //POO con Closures
    c('******POO con Closures******')
    function Carrito (articulo){
        let _articulo = articulo,
            _carrito = {}

        function agregar(articulo, cantidad){
            _carrito[articulo] = cantidad
        }

        function quitar(articulo){
            delete _carrito[articulo]
        }

        function _iterable(){
            let message = 'Carrito: \n'
            for (let key in _carrito)
                message += `\t${_carrito[key]} ${key}
`

            return message
        }

        function ver( articulo = 'todos'){
            return ( articulo === 'todos')
                // _carrito
                ? _iterable()
                : ( _carrito.hasOwnProperty(articulo) )
                    ? `${_carrito[articulo]} ${articulo}`
                    : `El articulo ${articulo} no existe en el Carrito`
        }
        return {
            agregar: agregar,
            quitar: quitar,
            ver: ver
        }
    }

    const comics = Carrito('Comics')
    c(comics)
    comics.agregar('Flash Point Paradox', 2)
    comics.agregar('The Return of the Dark Knight', 3)
    comics.agregar('Civil War', 3)
    comics.agregar('Final Crisis', 1)
    c(comics.ver())
    c(comics.ver('Civil War'))
    comics.quitar('Civil War')
    c(comics.ver('Civil War'))
    c(comics.ver())
})(console.log);