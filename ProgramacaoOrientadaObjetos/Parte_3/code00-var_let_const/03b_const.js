function testeConst() {
    const const01 = {propriedade: "valor"}
    console.log("01a.: " + const01.propriedade)

    const01.propriedade = "novo valor"
    console.log("02a.: " + const01.propriedade)

}

testeConst()