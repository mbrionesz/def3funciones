// En este archivo, se asume que el div con id "ele1" siempre existe.

function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById("ele1");

    // Pintar inicialmente con el color verde
    pintar(ele);

    ele.addEventListener("click", function () {
        pintar(ele, 'yellow');
    });
});
