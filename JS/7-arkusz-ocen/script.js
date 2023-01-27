const calculationButton = document.getElementById('oblicz');

const highlight = () => {
    getList().forEach(x => {
        if (x.average >= 4.75) {
           document.getElementById(x.id).querySelector('.uczen').style.backgroundColor = 'green';
        } else if (document.getElementById(x.id).querySelector('.uczen').style.backgroundColor === 'green') {
            document.getElementById(x.id).querySelector('.uczen').style.backgroundColor = 'white';
        }
        if (x.isFailedGrade === true) {
            document.getElementById(x.id).querySelector('.uczen').style.backgroundColor = 'red';
        } else if (document.getElementById(x.id).querySelector('.uczen').style.backgroundColor === 'red') {
            document.getElementById(x.id).querySelector('.uczen').style.backgroundColor = 'white';
        }
    });
}

function getList() {
    const student = document.querySelectorAll('div');
    const gradeAndStudent = [];
    for (let i = 0; i < student.length; i++) {
        const element = student[i];
        if (element.id.includes('uczen')) {
            const average = getAverage(element);
            element.querySelector('.srednia').innerText = average.toFixed(2).toString();
            gradeAndStudent.push({
                'id': element.id,
                'student': element.querySelector('.uczen').innerText,
                'average': average,
                'isFailedGrade': isFailedGrade(element),
            });
        }
    }
    return gradeAndStudent;
}

const getAverage = (element) => {
    const subjects = element.querySelectorAll('input');
    const additional = element.querySelector('.zajecia-dodatkowe').value.split(', ');
    let grade = 0.00;
    let sum = 0.0
    const subjectNumber = subjects.length;
    for (let i = 0; i < subjectNumber; i++) {
        const elem = subjects[i];
        const subject = elem.className;
        if (subject === 'zajecia-dodatkowe') {
            continue;
        } else {
            const initialGrade = parseFloat(elem.value)
            if (initialGrade === 6) {
                grade = initialGrade;
            } else {
                grade = additional.includes(subject) ? initialGrade + 0.5 : initialGrade;
            }
            sum += grade;
        }
    }
    return sum / (subjectNumber - 1);
}

const isFailedGrade = (element) => {
    const subjects = [...element.querySelectorAll('input')];
    const mainSubjects = subjects.filter(subject => subject.className !== 'zajecia-dodatkowe');
    const failedSubjects = mainSubjects.filter(subject => subject.value < 2);
    return failedSubjects.length > 0;
}

calculationButton.addEventListener('click', highlight);