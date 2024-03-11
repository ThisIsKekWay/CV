function toggleInfo(element) {
    var infoContent = element.nextElementSibling;
    if (infoContent.style.display === 'none') {
        infoContent.style.display = 'block';
        document.body.style.height = 'auto';
    } else {
        infoContent.style.display = 'none';
        document.body.style.height = '100%';
    }
}

window.onscroll = function() {
  var top = document.querySelector('.top');
  if (window.scrollY > 50) {
    top.style.backgroundColor = 'rgba(55, 112, 201, 0.9)'; /* Сделать блок top чуть менее прозрачным */
  } else {
    top.style.backgroundColor = 'rgb(255, 255, 255, 0)'; /* Сделать блок top полностью непрозрачным */
  }
}