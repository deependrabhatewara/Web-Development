const H = document.createElement("h2");

const P = document.createElement("p");

const B = document.createElement("button");

H.classList.add("text-info");
H.textContent = "This is a heading created using DOM manipulation";


const div = document.getElementById("task1");

div.appendChild(H);

P.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id similique neque quam quaerat magni inventore, magnam debitis non minima ipsum, ipsa tenetur deleniti laborum est nobis iusto tempora soluta molestiae.";

B.classList.add("btn", "btn-primary");
B.innerText = "Submit";

div.appendChild(P);
div.appendChild(B);
div.appendChild(H);

H.append("welcome");



H.remove();