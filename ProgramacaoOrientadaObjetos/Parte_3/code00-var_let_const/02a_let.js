function testeLet() {
    let let01 = "let 01"
    {
        let let02 = "let 02"
        console.log("01a.: " + let01)
        console.log("01b.: " + let02)
    }
    console.log("02a.: " + let01)

}

testeLet()