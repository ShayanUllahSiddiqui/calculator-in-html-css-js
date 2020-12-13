var btn = document.querySelector('#calculate');
var clr = document.querySelector('#clear')
var num = document.querySelectorAll('input')

btn.addEventListener('click', () => {
    var num1 = Number(document.querySelector('#num1').value),
        num2 = Number(document.querySelector('#num2').value),
        rlt = document.querySelector('p.answer');

    var method = document.querySelector('input[name="method"]:checked').value;
    var answer = 0;

    ('add' === method) ? answer = num1 + num2: ('sub' === method) ? answer = num1 - num2 : ('mul' === method) ? answer = num1 * num2 : ('div' === method) ? answer = num1 / num2 : ''


    rlt.innerHTML = window.alert(answer);
});

clr.addEventListener('click', () => {
    num.forEach(n => n.value = '')
});