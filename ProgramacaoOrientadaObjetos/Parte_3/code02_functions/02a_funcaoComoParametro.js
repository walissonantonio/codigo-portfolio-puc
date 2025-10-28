function decision(question, doOk, doCancel) {
    if (question == "OK") 
        doOk()
    else 
        doCancel();
}

function showOk() {
    console.log("You agreed.");
}

function showCancel() {
    console.log("You canceled the execution.");
}

decision("OK", showOk, showCancel); 
decision("CANCEL", showOk, showCancel);