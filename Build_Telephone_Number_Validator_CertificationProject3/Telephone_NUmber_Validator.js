document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
        alert('Please provide a phone number');
        return;
    }

    if (validateUSPhoneNumber(userInput)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
});

function validateUSPhoneNumber(number) {
    const validPatterns = [
        /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
        /^1?\s?\(\d{3}\)[-\s]?\d{3}[-\s]?\d{4}$/,
        /^1?\s?\(\d{3}\)\d{3}[-\s]?\d{4}$/,
        /^\d{10}$/
    ];

    const hasValidPattern = validPatterns.some(pattern => pattern.test(number));
    const startsWithCountryCode = number.startsWith('1') || !number.startsWith('1');

    return hasValidPattern && startsWithCountryCode;
}