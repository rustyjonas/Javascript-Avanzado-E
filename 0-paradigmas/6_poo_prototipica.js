
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