let count = 0;

const value = document.getElementById("value");

const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const decrease = document.getElementById('decrease');

increase.addEventListener('click', () => {
    value.innerHTML = ++count;
    if(count > 0) {
        value.style.color = 'green';
    }
    else if(count == 0) {
        value.style.color = 'black';
    }
})

reset.addEventListener('click', () => {
    count = 0;
    value.style.color = 'black';
    value.innerHTML = count;
})

decrease.addEventListener('click', () => {
    value.innerHTML = --count;
    if(count < 0) {
        value.style.color = 'red';
    }
    else if(count == 0) {
        value.style.color = "black"
    }
})