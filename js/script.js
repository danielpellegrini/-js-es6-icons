// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.

$(document).ready(function() {

  const icons = [{
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas'
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas'
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas'
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas'
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas'
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas'
    }
  ];

  // Milestone 2:
  // - Definire un array di colori e associare ad ogni tipo di icona un colore.
  // - Visualizzare le icone di colore diverso in base al tipo.

  const iconsContainer = document.getElementById('main-container');
  const colorsArray = ['#1E90FF', '#FA8072', '#800080'];
  const types = []

  icons.forEach((item, i) => {

    if (!types.includes(item.type)) {
      types.push(item.type);
    }

  });

  icons.forEach((item, i) => {
    const typeIndex = types.indexOf(item.type)

    if (typeIndex !== -1) {
      item.color = colorsArray[typeIndex];
    }

  });

  // Milestone 3:
  // - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
  // - Aggiungere una select per filtrare le icone in base al tipo.

  const typeOptions = [];
  const selector = document.getElementById('selector');

  //filling 'typeOptions' array
  icons.forEach((item) => {
    if (!typeOptions.includes(item.type)) {
      typeOptions.push(item.type);
    }
  });

  console.log(typeOptions);

  //filling search field with icons type
  typeOptions.forEach((item) => {
    selector.innerHTML += `
      <option value="${item}">${item}</option>
    `
  });

  // selecting the type with jQuery
  const selectorElement = $('#selector');

  selectorElement.change(function() {

    // emptying the container
    iconsContainer.innerHTML = '';

    const typeSelected = $(this).val()
    console.log(typeSelected);

    let filteredArray;

    if (typeSelected !== 'all') {
      //internal scope
      filteredArray = icons.filter((item) => {
        return item.type === typeSelected
      })
    } else {
      filteredArray = icons;
    }

    // - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
    filteredArray.forEach((item) => {

      iconsContainer.innerHTML += `
      <div>
        <i class="${item.family} ${item.prefix}${item.name}" style="color:${item.color}"></i>
        <div class="title">${item.name.toUpperCase()}</div>
      </div>
      `

    });

  });

  selectorElement.change();

});
