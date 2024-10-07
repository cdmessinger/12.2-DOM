// task 1

let task1 = document.getElementById("task1");

task1.innerText = "Changed using 'innerText'.";

//task 2

let task2 = document.getElementById("task2");

task2.innerHTML = "<button>Click Me</button>";

//task 3

let task3 = document.body;

task3.style.backgroundColor = "#232323";

// task 4

let task4 = document.getElementsByClassName("item");

for (let i = 0; i < task4.length; i++) {
     task4[i].style.border = "5px solid black";
}

//task 5

let task5 = document.getElementById("task5");

task5.href = "https://www.springboard.com/";

//task 6

let task6 = document.getElementById("task6");

task6.value = "DOM Master";

//task 7

let task7 = document.getElementById("task7");

task7.classList.add("new-class");

//task 8

let task8 = document.getElementById("task8");

let btn = document.createElement("button");

btn.textContent = "Click Me!";

task8.appendChild(btn);

// task 9

let task9 = document.getElementById("task9");

task9.remove();
