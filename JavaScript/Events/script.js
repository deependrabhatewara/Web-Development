function showAlert() {
    alert("Click me button clicked using HTML events");
}

document.getElementById("clkbtn").addEventListener("click" , showAlert);

function showAlert2() {
    alert("click mr button clicked using JS events");
}

document.getElementById("box").addEventListener("click" , ()=>{
    document.getElementById("box").innerText= "The box is Clicked"
});

document.getElementById("box2").addEventListener("mouseenter", () => {
    document.getElementById("box2").innerText = "The mouse Entered to box";
});

document.getElementById("box2").addEventListener("mouseout", () => {
    document.getElementById("box2").innerText = "The mouse Exit from box";
});

document.getElementById("nameSubmit").addEventListener("click" ,  () => {
    console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("fullname").addEventListener("keydown", (e) => {
    e.key === "Enter" && console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("LoginForm").addEventListener("submit" , (e) => {
    e.preventDefault();
    console.log("Login Done")
});



