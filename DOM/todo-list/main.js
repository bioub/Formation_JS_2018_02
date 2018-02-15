(function() {
  'use strict';

  const formElt = document.querySelector('.todo-form');
  const newTodoElt = document.querySelector('.new-todo');
  const todoListElt = document.querySelector('.todo-list');
  const togglerElt = document.querySelector('.toggle-all');

  togglerElt.addEventListener('change', () => {
    const checkboxNodeList = todoListElt.querySelectorAll('.todo-checkbox');

    const checkboxes = Array.from(checkboxNodeList); // ES6
    checkboxes.forEach((cb) => cb.checked = togglerElt.checked);
  });

  formElt.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target); // l'élément qui a déchenché l'événement

    // todoListElt.innerHTML = `<input value="${newTodoElt.value}">`;

    const divElt = document.createElement('div');

    const checkboxElt = document.createElement('input');
    checkboxElt.type = 'checkbox';
    checkboxElt.className = 'todo-checkbox';
    divElt.appendChild(checkboxElt);

    const inputElt = document.createElement('input');
    inputElt.value = newTodoElt.value;
    divElt.appendChild(inputElt);

    const buttonElt = document.createElement('button');
    buttonElt.innerHTML = '-';
    divElt.appendChild(buttonElt);

    buttonElt.addEventListener('click', (event) => {
      todoListElt.removeChild(divElt);
    });

    if (todoListElt.childElementCount) {
      todoListElt.insertBefore(divElt, todoListElt.firstElementChild);
    }
    else {
      todoListElt.appendChild(divElt);
    }

    /*
    1 - Insérer la balise input dans une balise div, et insérer cette balise div
    dans todoListElt tel que :
    <div class="todo-list">
      <div>
        <input>
      </div>
    </div>

    2 - Ajouter un bouton moins après l'input tel que :
    <div class="todo-list">
      <div>
        <input>
        <button>-</button>
      </div>
    </div>

    3 - Au clic du bouton moins supprimer la balise div parent
    https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild

    4 - Ajouter une checkbox à gauche de l'input tel que :
    <div class="todo-list">
      <div>
        <input type="checkbox">
        <input>
        <button>-</button>
      </div>
    </div>

    5 - Au clic de la checkbox toggle-all : tout cocher ou tout décocher
    https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
    https://developer.mozilla.org/fr/docs/Web/API/HTMLInputElement
    */
  });
}());
