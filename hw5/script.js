//Task1
let menuItem = document.getElementsByClassName("menuItem");

const showList = (e) => {
    if (e.target.tagName === "P") {
        e.target.parentElement.getElementsByClassName("list")[0].style.display = "flex";
    } else if (e.target.className === "menuItem") {
        e.target.getElementsByClassName("list")[0].style.display = "flex";
    } else {
        console.log(e.target);
    }
}

const hideList = (e) => {
    if (e.target.tagName === "P") {
        e.target.parentElement.getElementsByClassName("list")[0].style.display = "none";
    } else if (e.target.className === "menuItem") {
        e.target.getElementsByClassName("list")[0].style.display = "none";
    } else {
        console.log(e.target);
    }
}

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].onmouseover = showList;
    menuItem[i].onmouseout = hideList;
}


//Task2

let enterElement = () => {
    let li = document.createElement("li");
    li.innerText = "petuh";
    document.body.append(li);
    console.log(li);
}

let deleteElement = () => {
    let lis = document.getElementsByTagName("li");
    lis[lis.length - 1].remove();
}

document.getElementById("enter").addEventListener('click', enterElement);
document.getElementById("delete").addEventListener('click', deleteElement);