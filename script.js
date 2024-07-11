const userInput = prompt('Enter a 5 digit number');

if (userInput === null) {
    alert('You canceled!');
}
else if (!userInput.trim()) {
    alert('You entered nothing!');
}
else if (isNaN(userInput)) {
    alert('You entered not a number!')
}
else {
    const number = Math.abs(parseInt(userInput));

    if (number.toString().length === 5) {
        const digits = userInput.split('').join(' ');
        alert(digits);
    }
    else{
        alert('You did not enter a five-digit number!');
    }
}