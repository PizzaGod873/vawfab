document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('websiteUrl').value;
    const iframe = document.getElementById('previewFrame');
    iframe.src = url;
});

window.onbeforeunload = function() {
    return "Close page? Changes made may not be saved.";
};
