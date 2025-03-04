function checkMessage() {
    
    let messageValue = prompt('Enter a message: ');
    
    let resultMessage = '';

    if (messageValue.indexOf('aI') !== -1 || messageValue.indexOf('Ai') !== -1) {
        resultMessage = 'fake!';
        
        } else if (messageValue.indexOf('FR') !== -1 && messageValue.indexOf('AI') !== -1) {
        resultMessage = 'legitimate!';
        
        } else if (messageValue.indexOf('FR') !== -1 || messageValue.indexOf('AI') !== -1) {
        resultMessage = 'legitimate!';
        
        } else {
        resultMessage = 'not yet encoded!';
        }

        document.getElementById('result').innerHTML = `The message "${messageValue}" is ${resultMessage}`;
}
