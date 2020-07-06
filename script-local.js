


let saveChoice = document.querySelector("#save_choice");
let checkBoxes = document.querySelectorAll("input[type='checkbox']")




saveChoice.onclick = () => {

    for(let i = 0; i<6; i++) {
        localStorage.setItem(`coding-${i}`, checkBoxes[i].checked);     
        localStorage.setItem(`interest-${i}`, checkBoxes[i].disabled)
        }    
};


// Сохраняю галки
for(let i =0; i<6; i++) {
    if (localStorage.getItem(`coding-${i}`) == "true") {
        checkBoxes[i].checked = true
    }
    else {
        checkBoxes[i].checked = false
    }
}
// Отлючаю выбор галок
for(let i =0; i<6; i++) {
    if (localStorage.getItem(`interest-${i}`)) {
        checkBoxes[i].disabled = true
    }
    
}