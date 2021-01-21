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

  // - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
  const iconsContainer = document.getElementById('main-container');

  icons.forEach((item) => {

    const {
      name,
      prefix,
      type,
      family,
      color
    } = item;


    iconsContainer.innerHTML += `
      <div>
        <i class="${family} ${prefix}${name}" style="color:${color}" ></i>
        <div class="title">${name.toUpperCase()}</div>
      </div>
  `
  });

  console.log(iconsContainer)



});






// Milestone 3:
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
// - Aggiungere una select per filtrare le icone in base al tipo.



// Consigli
// Ragionate per singola milestone.
// Leggetevi prima il tutto giusto per avere chiara l'idea sulla nostra applicazione, ma poi stop.
// Prendete quindi solo la prima milestone e conquistatela senza più neanche pensare alle successive. E poi caffettino, e passate alla seconda.
// Per la terza milestone un po' di codice l'abbiamo già visto in classe. Approcciate con curiosità e creatività il tutto.
