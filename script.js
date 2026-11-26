const statusBtn = document.getElementById("statusBtn");
const statusMsg = document.getElementById("statusMsg");

statusBtn.addEventListener("click", function () {
    statusMsg.textContent = "Portal Active: All courses and attendance records are up to date!";
});