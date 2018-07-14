// 1: Set the text of the <h1> element

let h1Title = document.querySelector('h1');
h1Title.textContent = "Blues harmonica players";

// 2: Set the color of the <h1> to a different color

h1Title.style.color = 'orange';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

let description = document.querySelector('.desc');
description.innerHTML = 'This is my list of <strong>favorite</strong> blues harmonica players';

// 4: Set the class of the <ul> to 'list'

let list = document.querySelector('ul');
list.className = 'list';

// 5: Create a new list item and add it to the <ul>

let newItem = document.createElement('li');
newItem.innerHTML = '<input> Walter Horton';
list.appendChild(newItem);

// 6: Change all <input> elements from text fields to checkboxes

let inputs = document.querySelectorAll('input');
for ( let i=0; i < inputs.length; i++ ) {
    inputs[i].setAttribute('type', 'checkbox');
};

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>

let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
let extraDiv = document.querySelector('.extra');
extraDiv.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

deleteButton.addEventListener('click', () => {
    extraDiv.remove();
});