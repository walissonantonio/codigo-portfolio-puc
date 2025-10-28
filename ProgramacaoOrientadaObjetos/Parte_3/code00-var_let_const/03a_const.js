function testeConst() {
    const const01 = "const 01"
    {
        const const02 = "const 02"
        console.log("01a.: " + const01)
        console.log("01b.: " + const02)
    }
    const01 = "const 01"
    console.log("02a.: " + const01)
    console.log("02b.: " + const02)

}

testeConst()