export const handleButton = () => {

    const myNumber = document.querySelectorAll('.number');

    const num = document.getElementById('num').value;

    const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;

    myNumber.forEach((v) => {
        if (v.previousElementSibling.firstElementChild.checked || checkedCount == 0) {
            v.textContent = +(v.textContent) + (+num);
        }
    });

}


export const handleIncrement = () => {

    const myNumber = document.querySelectorAll('.number');

    const num = document.getElementById('num').value;

    myNumber.forEach((v) => {
        if (v.previousElementSibling.firstElementChild.checked && num <= 0) {
            v.textContent = +(v.textContent) + (+1);
        }
        else if (v.previousElementSibling.firstElementChild.checked && num > 0) {
            v.textContent = +(v.textContent) + (+num);
        }
    });
}


export const handleDecrement = () => {

    const myNumber = document.querySelectorAll('.number');

    const num = document.getElementById('num').value;

    myNumber.forEach((v) => {
        if (v.previousElementSibling.firstElementChild.checked && num <= 0) {
            v.textContent = +(v.textContent) - (+1);
        }
        else if (v.previousElementSibling.firstElementChild.checked && num > 0) {
            v.textContent = +(v.textContent) - (+num);
        }
    });
}