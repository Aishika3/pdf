var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#generatePDF').click(function () {
    // Only include the heading and notes in the PDF
    var content = $('#headingTextarea').val() + '\n\n' + $('#notesTextarea').val();

    doc.fromHTML(content, 15, 15, {
        'width': 700,
        'elementHandlers': specialElementHandlers
    });
    doc.save('sample_file.pdf');
});

// Toggle theme functionality
$('#themeToggle').change(function () {
    if ($(this).is(':checked')) {
        $('body').addClass('dark-theme');
        $('#htmlContent').addClass('dark-theme');
    } else {
        $('body').removeClass('dark-theme');
        $('#htmlContent').removeClass('dark-theme');
    }
});

