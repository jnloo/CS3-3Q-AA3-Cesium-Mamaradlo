function checkMessage() {
    let messageValue = prompt("Enter a word to verify: ");

    if ((messageValue.indexOf('FR') >= 0) && (messageValue.indexOf('AI') >=0)) {
        document.getElementById('result').innerHTML = `The message "${messageValue}" is legitimate!`;
   
    }  
   
        else if (messageValue.indexOf('AI') >=0 || messageValue.indexOf('aI') >=0 || messageValue.indexOf('Ai') >=0) {
        document.getElementById ('result').innerHTML = `The message "${messageValue}" is tampered!!`;
   
    }

        else if (messageValue.indexOf('FR') >= 0) {
        document.getElementById ('result').innerHTML = `The message "${messageValue}" is legitimate!`;
   
    }

        else {
        document.getElementById ('result').innerHTML = `The message "${messageValue}" is not yet encoded!!`;
    }
   
}



