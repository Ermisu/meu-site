document.getElementById('btnCompartilhar').addEventListener('click', function() {
    var popover = document.getElementById('popoverCompartilhar');
    if (popover.style.display === 'none') {
        popover.style.display = 'block';
    } else {
        popover.style.display = 'none';
    }
});