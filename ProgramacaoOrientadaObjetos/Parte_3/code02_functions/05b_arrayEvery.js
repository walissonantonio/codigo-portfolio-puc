array = [4, 5, 6, 7, 8, 9, 10]

regraImpar = (item) => item % 2 != 0

console.log("Todos os números são ímpares no array? " + array.every(regraImpar) );

regraPrimo = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++) 
        if (item % divisor === 0)
            ndiv++;

    if(ndiv == 2)
        return true
    else
        return false
    
}

console.log("Todos os números são primos no array? " + array.every(regraPrimo) );  