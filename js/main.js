const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('button');

function verifyInputs(e) {
    e.preventDefault();

    inputs.forEach(field => {
        if(field.value === '' || (field.type === 'email' && !(/@/.test(field.value)))) {
            document.querySelectorAll(`#${field.id}`).forEach(imgAndMsg => imgAndMsg.classList.add('show'));
        } else {
            document.querySelectorAll(`#${field.id}`).forEach(imgAndMsg => imgAndMsg.classList.remove('show'));
        }
    });

    inputs.forEach(input => input.value = '');

    alert('Operation was successful');
}

submitBtn.addEventListener('click', verifyInputs);