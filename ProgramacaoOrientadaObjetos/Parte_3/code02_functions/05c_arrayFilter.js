array = [4, 5, 6, 7, 8, 9, 10]

regraImpar = (item) => item % 2 != 0

console.log("Filtrar números ímpares no array? " + array.filter(regraImpar) );

regraPrimo = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++) 
        if (item % divisor == 0)
            ndiv++

    if(ndiv == 2)
        return true
    else
        return false
}

console.log("Filtrar números primos no array? " + array.filter(regraPrimo) );