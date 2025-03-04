function checkMessage() {
    let message = prompt("Enter the message to verify:");

    if ( message !== null && message !== "") {
        let check = 'The message "$ {value}" is ';
        
        if (
        (message.includes("FR") || message.includes("fr")) && 
        (message.includes("AI") || message.includes("ai"))
        ) {
        result = "The message is legitimate.";
            
        } else if (message.includes("FR") || message.includes("fr")) {
        result = "The message is legitimate.";

        } else if (message.includes("AI")) {
        result = "The message is tampered with.";
            
        } else if (message.includes("aI") || message.includes("Ai")) {
        result = "The message is tampered with.";
            
        } else {
        result = "The message is yet to be encoded.";
            
        }

    document.getElementById("result").innerText = result;
}
