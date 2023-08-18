$(document).ready(function () {
    $('#form-input').submit(function (e) {
        e.preventDefault();
        const taskText = $('#input-tak').val().trim();
        if (taskText !== '') {
            const listItem = $('<li>').text(taskText);
            $('#form-input').append(listItem);
            $('#input-tak').val('');
        }
    });

    $('#form-input').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});