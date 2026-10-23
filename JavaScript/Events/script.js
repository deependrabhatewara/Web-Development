function showAlert() {
    alert("Click me button clicked using HTML events");
}

document.getElementById("clkbtn").addEventListener("click" , showAlert);

function showAlert2() {
    alert("click mr button clicked using JS events");
}

document.getElementById("box").addEventListener("click" , ()=>{
    document.getElementById("box").innerText= "The box is Clicked"
})


