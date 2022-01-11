 //Task 1
 const p = document.createElement("p");
 p.className = 'text';
 p.innerHTML = "Это всего лишь текст";
 document.body.appendChild(p);
 const div = document.createElement("div");
 div.className = 'alert';
 div.innerHTML = 'mistake';
 document.body.appendChild(div);


 //Task2
 let arr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
     "Sergey", "Ivan", "Alan"
 ];
 let ol = document.createElement("ol");
 for (let i = 0; i < arr.length; i++) {
     let li = document.createElement("li");
     li.innerText = arr[i];
     if (i % 2 === 0) {
         li.className = "even";
         li.style.backgroundColor = "green";
         ol.append(li);
     } else {
         li.className = "odd";
         li.style.backgroundColor = "blue";
         ol.append(li);
     };
 };
 document.body.append(ol);



 