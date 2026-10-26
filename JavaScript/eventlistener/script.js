const showAssBtn = document.getElementById("ShowAssignmentNotification");
const showAttBtn = document.getElementById("ShowAttendanceNotification");
const stopAssBtn = document.getElementById("StopAssignmentNotification");

const assPara = document.getElementById("AssignmentNotification");
const attPara = document.getElementById("AttendanceNotification");


function ShowAssignment() {
    assPara.textContent = "Your Assignment deadline is approaching";
}

showAssBtn.addEventListener("click",ShowAssignment);

showAttBtn.addEventListener("click", () => {
    attPara.textContent = "Please check yout attendance Status";
})

showAttBtn.addEventListener("click" , () => {
    showAssBtn.removeEventListener("click" , ShowAssignment);

    showAttBtn.removeEventListener("click" , () => {
        attPara.textContent = "Please check your attendance status";
    })

    assPara.textContent = "Your Assignment Notification is Stopped"
})


const parent = document.getElementById("outer");
const child  = document.getElementById("inner")

parent.addEventListener("click", () => {
    console.log("parent clicked");
});

child.addEventListener("click" , () => {
    console.log("Child Clicked");
    
});