'use strict';
// Task 3

const checkbox = (e) => {
    let formElementsText = document.getElementById('nameCheck').value;
    let checkBoxes = document.getElementsByClassName('check');
    for (let i = 0; i < checkBoxes.length; i++){
        if (checkBoxes[i].checked) {
            console.log(checkBoxes[i].name);
        }
    }
    console.log(formElementsText);
    e.target.reset();
    e.preventDefault();
}
document.forms[0].addEventListener('submit', checkbox);

// Task 4

const formFocus = (e) => {
    let elemFocus = e.target.elements[0].value;
    if (elemFocus == '') {
        document.getElementById('nameFocus').focus();
    }
    console.log(elemFocus);
    e.target.reset();
    e.preventDefault();
}
document.forms[1].addEventListener('submit', formFocus);