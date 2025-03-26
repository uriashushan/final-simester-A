



document.addEventListener("DOMContentLoaded",function (){
const loginbtn=document.getElementById("login");
const Usericon=document.getElementById("user-icon");
loginbtn.addEventListener("click",function(){
    if(loginbtn.textContent==="login"){
        loginbtn.textContent="Sign Out";
        Usericon.textContent="✅";
        
    }
    else{
     loginbtn.textContent="login"
     Usericon.textContent="👤"       
        }
});
});

// יום ולילה 
function toggleTheme() {
    const ThemBtn = document.getElementById("day-night-toggle");
    const navbar = document.getElementById("navbar");
    
    const body = document.body;
    if (ThemBtn.innerText === "Night") {  // Check the text content of the button
        console.log("Switching to night mode");
        navbar.style.backgroundColor = "#000";
        navbar.style.color = "white";
        body.style.backgroundColor = "#000";
        body.style.color = "white";
        ThemBtn.innerText = "Day";  // Change button text to "Day"
    } else {
        console.log("Switching to day mode");
        navbar.style.backgroundColor = "#fff";
        navbar.style.color = "#000";
        body.style.backgroundColor = "#fff";
        body.style.color = "#000";
        ThemBtn.innerText = "Night";  // Change button text to "night"
    }
}
