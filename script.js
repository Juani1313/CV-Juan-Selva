//Codigo msj bienvenida
document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el mensaje ya se ha mostrado en la sesión actual
    var mensajeMostrado = sessionStorage.getItem('mensajeMostrado');

    // Si el mensaje no se ha mostrado, muestra el mensaje y almacena en sessionStorage
    if (!mensajeMostrado) {
        alert("¡Bienvenido/a a mi Curriculum Vitae! Puede hacer click en la imagen para agrandarla");
        sessionStorage.setItem('mensajeMostrado', 'true');
    }
});

//Codigo para agrandar mi imagen
function agrandarImg() {
    var imgLogo = document.getElementById('imgLogo');
    //carga el valor actual de la imagen
    var currentSize = imgLogo.getAttribute('data-size');

    // Verifica el tamaño actual y ajusta al tamaño deseado
    if (currentSize === 'small') {
        imgLogo.style.width = '28%';
        imgLogo.style.height = '28%';
        imgLogo.setAttribute('data-size', 'large');
    } else {
        imgLogo.style.width = '200px';
        imgLogo.style.height = '200px';
        imgLogo.style.padding = '3px';
        imgLogo.style.marginLeft = '130px';
        imgLogo.style.marginTop = '30px';
        imgLogo.setAttribute('data-size', 'small');
    }
}

