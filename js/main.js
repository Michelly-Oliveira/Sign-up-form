const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('button');

function verifyInputs(e) {
    e.preventDefault();

    inputs.forEach(field => {
        if(field.value === '' || (field.type === 'email' && !(/@/.test(field.value)))) {
            document.querySelectorAll(`#${field.id}`).forEach(imgAndMsg => imgAndMsg.classList.add('show'));
        } else {
            document.querySelectorAll(`#${field.id}`).forEach(imgAndMsg => imgAndMsg.classList.remove('show'));
            alert('Operation was successful');
        }
    });

    inputs.forEach(input => input.value = '');
}

submitBtn.addEventListener('click', verifyInputs);
