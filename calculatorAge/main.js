// ====== Calcula edad correctamente ======
function CalculateAge(day, month, year) {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age_year = today.getFullYear() - birthDate.getFullYear();
    let age_month = today.getMonth() - birthDate.getMonth();
    let age_days = today.getDate() - birthDate.getDate();

    if (age_days < 0) {
        age_month--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        age_days += prevMonth.getDate();
    }
    if (age_month < 0) {
        age_year--;
        age_month += 12;
    }
    return { days: age_days, months: age_month, years: age_year };
}
function main() {
    const age_day = document.querySelector('.days');
    const age_month = document.querySelector('.months');
    const age_year = document.querySelector('.years');
    const { days, months, years } = CalculateAge(
        parseInt(age_day.value, 10),
        parseInt(age_month.value, 10),
        parseInt(age_year.value, 10)
    );
    document.querySelector('.rday').textContent = days;
    document.querySelector('.rmonth').textContent = months;
    document.querySelector('.ryear').textContent = years;
}
const yearInput = document.querySelector('.years');
yearInput.max = new Date().getFullYear();
const btn = document.querySelector('.main__img-button');

document.querySelectorAll('.input__age').forEach(input => {
    const parent = input.closest('.main__age');
    const label = parent.querySelector('.text__age');
    const error = parent.querySelector('.error-msg');

    input.addEventListener('input', () => {
        input.setCustomValidity('');

        if (input.validity.valid) {
            error.textContent = '';
            input.style.border = '';
            label.style.color = '';}
    });
});

btn.addEventListener('click', () => {
    let isValid = true;

    document.querySelectorAll('.input__age').forEach(input => {
        const parent = input.closest('.main__age');
        const label = parent.querySelector('.text__age');
        const error = parent.querySelector('.error-msg');

        input.setCustomValidity('');

        if (!input.checkValidity()) {
            if(input.value===""){
                input.setCustomValidity('This file is required')
            }
            else{
                input.setCustomValidity('Must be a valid value');
            }
            error.textContent = input.validationMessage;
            error.style.letterSpacing = '1px';
            error.style.color = 'var(--Red_400)';
            error.style.fontSize = '8px';
            input.style.border = '1px solid var(--Red_400)';
            label.style.color = 'var(--Red_400)';
            isValid = false;
        } else {
            input.setCustomValidity('');
            error.textContent = '';
            input.style.border = '';
            label.style.color = '';
        }
    });

    if (isValid) {
        main();
    }
});
