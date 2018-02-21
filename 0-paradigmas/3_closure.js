let contador = (()=>{
    // Por convencion, a las variables privada se les antepone un '_' delante
    let _contador = 0

    function incrementar() {
        return _contador++
    }

    function decrementar() {
        return _contador--
    }

    function valor() {
        return _contador
    }

    return {
        incrementar: incrementar,
        decrementar: decrementar,
        valor: valor
    }
})();

console.log(contador.valor()) //0
contador.incrementar()
contador.incrementar()
console.log(contador.valor()) //2
contador.decrementar()
console.log(contador.valor()) //1