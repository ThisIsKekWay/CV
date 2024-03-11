function toggleInfo(element) {
    var infoContent = element.nextElementSibling;
    if (infoContent.style.display === 'none') {
        infoContent.style.display = 'block';
    } else {
        infoContent.style.display = 'none';
    }
}