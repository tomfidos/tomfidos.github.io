const calculationButton = document.getElementById('oblicz');

const calculateSalariesAndBonuses = () => {
    const employees = document.querySelectorAll('div');
    for (let i=0; i< employees.length; i++) {
        const element = employees[i];
        if (element.id.includes('pracownik')) {;
            const worktime = parseInt(element.querySelector('.czas').value)
            const rate = parseInt(element.querySelector('.stawka').value);
            const payment = worktime * rate;
            const overtime = worktime - 160;
            let bonus = 0;
            if (overtime > 0) {
                bonus = overtime * 2 * rate;
            }
            const salary = element.querySelector('.wyplata');
            salary.innerText = payment + bonus;
        }
    }
}

calculationButton.addEventListener('click', calculateSalariesAndBonuses);
