const ar = ("sourabh", "Rupesh","Krishna","Pushkar","Deependra");

const list = document.createElement("ol");

ar.forEach(element => {
    const l = document.createElement("li");
    l.textContent = item;
    list.appendChild(l);
});

document.getElementById("mylist").appendChild(list);

