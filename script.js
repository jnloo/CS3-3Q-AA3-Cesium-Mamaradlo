function checkMessage() {
    
    let messageValue = prompt("Enter a word to verify: ");

    if (messageValue.includes('FR') && messageValue.includes('AI')) {
        document.getElementById('result').innerHTML = `The message "${messageValue}" is legitimate!`;
        
    } else if (messageValue.includes('AI') || messageValue.toLowerCase().includes('ai')) {
        document.getElementById('result').innerHTML = `The message "${messageValue}" is tampered!!`;
        
    } else if (messageValue.includes('FR') || messageValue.toLowerCase().includes('fr'))  {
        document.getElementById('result').innerHTML = `The message "${messageValue}" is legitimate!`;
        
    } else {
        document.getElementById('result').innerHTML = `The message "${messageValue}" is not yet encoded!!`;
        
    }
}


