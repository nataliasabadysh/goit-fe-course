
const VALIDATOR = {
    patterns: {
        name: /^[a-zA-Z ]{4,}$/,         // regular expression Не меньше чем 4 буквы и пробел
        email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,  //
        password: /^[a-z0-9]{6,18}$/,    // буквы-цыфры  от 6-18
    },

    validate(formElement) { // принемает ссылку на ДОМ узел

        const inputs = Array.from(formElement.querySelectorAll('input'));
// пройтись по инпутаи и получить его текушее значение

        const results = inputs.reduce((acc, { name, value }) => {

            const valid = this.isValid(name, value);

            acc[name] = valid;

            console.group('group');
            console.log('name: ', name);
            console.log('value: ', value);
            console.log('valid: ', valid);
            console.groupEnd('group');

            return acc;
        }, {});

        const valid = Object.values(results).every(value => value);

        return {
            valid,
            results,
        };
    },
    isValid(key, value) {
        return this.patterns[key].test(value);
    },
};

const form = document.querySelector('.js-signup');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();

    const validationResults = VALIDATOR.validate(form); // ссылка на форму
    // выберает и селектр и  инпуты и чекбокси

    if (!validationResults.valid) {
        alert('Oh no form is not valid!!!!');
        console.log(validationResults.results);
        return;
    }

    alert('Beep boop, thanks and have fun!');
    form.reset();
}