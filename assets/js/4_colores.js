// Variable global para almacenar el color
let globalColor = '';

// Asignar el evento clic a los divs azul, rojo, verde, amarillo
document.getElementById('azul').addEventListener('click', changeColorOnClick);
document.getElementById('rojo').addEventListener('click', changeColorOnClick);
document.getElementById('verde').addEventListener('click', changeColorOnClick);
document.getElementById('amarillo').addEventListener('click', changeColorOnClick);

// Función para cambiar el color al hacer clic en los divs azul, rojo, verde, amarillo a negro
function changeColorOnClick(event) {
  event.target.style.backgroundColor = 'black';
}

// Función para cambiar el color del div "key" según la tecla presionada
function changeColorByKey(event) {
  globalColor = getColorForKey(event.key);
  document.getElementById('key').style.backgroundColor = globalColor;
}

// Función para crear un nuevo div con colores específicos
function createNewDiv(color) {
  const newDiv = document.createElement('div');
  newDiv.style.width = '200px';
  newDiv.style.height = '200px';
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);

  // Cambiar el color del div "key" al color del nuevo div
  globalColor = color;
  document.getElementById('key').style.backgroundColor = globalColor;
}

// Función para obtener el color asociado a una tecla
function getColorForKey(key) {
  switch (key) {
    case 'a':
      return 'pink';
    case 's':
      return 'orange';
    case 'd':
      return '#51D1F6';
    case 'q':
      return 'purple';
    case 'w':
      return 'gray';
    case 'e':
      return '#804000';
    default:
      return '';
  }
}

// Asignar el evento keydown a toda la página para cambiar el color del div "key"
document.addEventListener('keydown', function (event) {
  if (event.key === 'a' || event.key === 's' || event.key === 'd') {
    changeColorByKey(event);
  } else if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
    createNewDiv(getColorForKey(event.key));
  }
});

