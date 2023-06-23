const buttonClick = document.querySelector('#click');
const divBlock = document.querySelector('#message');

buttonClick.addEventListener('click', () => {
    let name = prompt('введи свое имя, пидор!', '');

    if (name === '') {
        alert('Ты не ввел имя, уебище!')
    }
    else {
        let pTrue = document.createElement('p');
        pTrue.textContent = `Добро пожаловать в гейский клуб голубая устрица) ${name} )`;
        pTrue.style.fontSize = '36px';
        
        return divBlock.insertAdjacentElement('beforebegin', pTrue);
    }
})