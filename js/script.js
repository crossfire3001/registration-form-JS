window.onload = function () {
    const fullName = document.getElementById('fullname-input');
    const userName = document.getElementById('username-input');
    const checkBox = document.getElementById('checkbox');


    //2. В поле "Full Name" запретите вводить цифры.
    fullName.onkeydown = (e) => {
        const letters = e.key;
        if (!isNaN(letters)) {
            e.preventDefault();
        }
    }

    // 3. В поле "Your username" запретите вводить точки и запятые.
    userName.onkeydown = (e) => {
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


};