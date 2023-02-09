'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    if (document.body.id == 'tema-escuro') {
        document.body.setAttribute('id', 'tema-claro');
    } else {
        document.body.setAttribute('id', 'tema-escuro');
    }


    var id = document.body.id;

    if (id == 'tema-escuro') {
        this.textContent = 'Light'
    } else {
        this.textContent = 'Dark'
    }
});