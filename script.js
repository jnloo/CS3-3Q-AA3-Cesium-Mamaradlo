function checkMessage() {
    
    let messageValue = prompt("Enter a word to verify:");
    
    let result = document.getElementById('result');
    
    let output = '';

    if (messageValue.includes('FR') && messageValue.includes('AI')) {
        output = `The message "${messageValue}" is legitimate!`;
        
        } else if (
        messageValue.includes('AI') ||
        
        messageValue.includes('aI') ||
        
        messageValue.includes('Ai')
        
        ) {
        output = `The message "${messageValue}" is tampered!`;
        
        } else if (messageValue.includes('FR')) {
        output = `The message "${messageValue}" is legitimate!`;
        
        } else {
        output = `The message "${messageValue}" is not yet encoded!`;
        
        }

        result.innerHTML = output;
}
