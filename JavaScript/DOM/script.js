let text = document.querySelector("h1").innerText;

console.log(text + " Deependra");

function submit()
{
    console.log("Submit Button Clicked");
    

    const nm=document.querySelector("#fullname".value).trim();
    const em=document.getElementById("email").trim();

    console.log("Full name:" , nm);
    console.log("Email" , em)
    
}

