window.onload = function () {
    const fullNameInput = document.getElementById('fullname-input');
    const userNameInput = document.getElementById('username-input');
    const checkBox = document.getElementById('checkbox');
    const registrationBtn = document.querySelector('.registration__btn');


    //2. В поле "Full Name" запретите вводить цифры.
    fullNameInput.onkeydown = (e) => {
        const letters = e.key;
        if (!isNaN(letters)) {
            e.preventDefault();
        }
    }

    // 3. В поле "Your username" запретите вводить точки и запятые.
    userNameInput.onkeydown = (e) => {
        const dots = e.key;
        if (dots === ',' || dots === '.') {
            e.preventDefault();
        }
    }

    // 4.
    checkBox.onchange = (e) => {
        const checked = e.target.checked;
        if (checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен')
        }
    }

    registrationBtn.onclick = (e) => {
        const emailInput = document.getElementById('email-input');
        const passwordInput = document.getElementById('password-input');
        const repeatPasswordInput = document.getElementById('repeat-password-input');
        const inputFilled = false;

        if (!fullNameInput.value) {
            alert('Заполните имя');
            return;
        }
        if (!userNameInput.value) {
            alert('Заполните заполните ник пользователя');
            return;
        }
        if (!emailInput.value) {
            alert('Заполните почту');
            return;
        }
        if (!passwordInput.value || passwordInput.value.length <= 8) {
            alert('Заполните пароль');
            return;
        }
        if (!repeatPasswordInput.value || repeatPasswordInput.value.length <= 8) {
            alert('Заполните пароль повторно');
            return;
        }
        if (passwordInput.value !== repeatPasswordInput.value) {
            alert('Пароли не совпадают');
            return;
        }
        if (!checkBox.checked) {
            alert('Подтвердите условия соглашения');
            return;
        }
    }


};