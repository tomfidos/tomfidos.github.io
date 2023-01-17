const calculationButton = document.getElementById('oblicz');
const salaryFields = document.querySelectorAll('.wyplata');

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

const getAndListTopPeformers = () => {
    if (document.getElementById('najlepsi-pracownicy').innerText !== '') {
        document.getElementById('najlepsi-pracownicy').innerText = '';
    }
    const employees = document.querySelectorAll('div');
    const worktimeAndEmployees = [];
    for (let i=0; i< employees.length; i++) {
        const element = employees[i];
        if (element.id.includes('pracownik')) {
            worktimeAndEmployees.push({
                'employee': element.querySelector('.pracownik').innerText,
                'worktime': parseInt(element.querySelector('.czas').value),
            });
        }
    }
    worktimeAndEmployees.sort((x, y) => y.worktime - x.worktime);
    const bestSpan = document.getElementById('najlepsi-pracownicy');
    const bestList = worktimeAndEmployees.slice(0, 3).map(x => x.employee).join(', ');
    if (bestSpan.innerText === '') {
        bestSpan.innerText = bestList;
    }
}

calculationButton.addEventListener('click', calculateSalariesAndBonuses);
salaryFields.forEach(elem => {
    elem.addEventListener('DOMSubtreeModified', getAndListTopPeformers)
});
