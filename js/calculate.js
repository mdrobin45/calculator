// Get element function
function getElement(elementId) {
    let element = document.getElementById(elementId);
    return element;
}

// Get button element
function button(buttonId) {
    let btn = document.getElementById(buttonId);
    return btn;
}
// Display input value
function displayValue() {
    let value = document.getElementById('displayCalculation');
    return value;
}

// Disable Display section
getElement('displayCalculation').setAttribute('disabled', '');

// Digit button click handler
var clickHandler = function (btnId) {
    return displayValue().value += button(btnId).value;
};

// Digit button click
button('btn-7').addEventListener('click', () => { clickHandler('btn-7'); });
button('btn-8').addEventListener('click', () => { clickHandler('btn-8'); });
button('btn-9').addEventListener('click', () => { clickHandler('btn-9'); });
button('btn-plus').addEventListener('click', () => { clickHandler('btn-plus'); });
button('btn-4').addEventListener('click', () => { clickHandler('btn-4'); });
button('btn-5').addEventListener('click', () => { clickHandler('btn-5'); });
button('btn-6').addEventListener('click', () => { clickHandler('btn-6'); });
button('minus').addEventListener('click', () => { clickHandler('minus'); });
button('btn-1').addEventListener('click', () => { clickHandler('btn-1'); });
button('btn-2').addEventListener('click', () => { clickHandler('btn-2'); });
button('btn-3').addEventListener('click', () => { clickHandler('btn-3'); });
button('multiple').addEventListener('click', () => { clickHandler('multiple'); });
button('zero').addEventListener('click', () => { clickHandler('zero'); });
button('float').addEventListener('click', () => { clickHandler('float'); });
button('divided').addEventListener('click', () => { clickHandler('divided'); });

// Calculate Result
button('equal').addEventListener('click', function () {
    displayValue().value = eval(displayValue().value);
});