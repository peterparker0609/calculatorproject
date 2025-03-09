document.addEventListener('DOMContentLoaded', function () {
    const buttons = [
        'C', 'M+', 'M-', 'MC',
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
    ];

    const buttonContainer = document.querySelector('.buttons');
    const display = document.getElementById('display');

    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.textContent = button;
        btn.addEventListener('click', () => handleButtonClick(button));
        buttonContainer.appendChild(btn);
    });

    function handleButtonClick(button) {
        if (button === 'C') {
            display.value = '';
        } else if (button === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += button;
        }
    }

    document.addEventListener('keydown', function (event) {
        if (/^[0-9]$/.test(event.key)) {
            display.value += event.key;
        } else {
            alert('Only numbers are allowed');
        }
    });
});
