const sourceUrl = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php';

const button = $('#button');

button.click(() => {
    const div = $('<div id="dane-pracownika"></div>');
    button.after(div);
    $.getJSON(sourceUrl)
        .done((data) => {
            for (let key in data) {
                div.append(`<p id="${key}"></p>`);
                if (key === 'imie') {
                    $(`#imie`).text(`Imię: ${data[key]}`);
                } else if (key === 'nazwisko') {
                    $(`#nazwisko`).text(`Nazwisko: ${data[key]}`);
                } else if (key === 'zawod') {
                    $(`#zawod`).text(`Zawód: ${data[key]}`);
                } else if (key === 'firma') {
                    $(`#firma`).text(`Firma: ${data[key]}`);
                } else {
                    $(`#${key}`).text(`${key}: ${data[key]}`);
                }
            }
        })
        .fail((error) => {
            console.error(error);
            div.append('<p>Error. Check console for details.</p>')
        })
        .always(() => {
            console.log('Completed');
        });
});