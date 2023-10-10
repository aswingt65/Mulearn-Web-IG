const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");

form.addEventListener("submit", (e) => e.preventDefault());

submitBtn.addEventListener("click", () => {
    
    localStorage.setItem("name", nameInput.value);
    
    nameDisplayCheck();
});

forgetBtn.addEventListener("click", () => {
    
    localStorage.removeItem("name");
    
    nameDisplayCheck();
});

function nameDisplayCheck() {
   
    if (localStorage.getItem("name")) {
       
        const name = localStorage.getItem("name");
        h1.textContent = `Welcome, ${name}`;
        personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
        forgetDiv.style.display = "block";
        rememberDiv.style.display = "none";
    } else {
  
        h1.textContent = "Welcome to our website ";
        personalGreeting.textContent =
            "Welcome to our website. We hope you have fun while you are here.";
        forgetDiv.style.display = "none";
        rememberDiv.style.display = "block";
    }
}

nameDisplayCheck();
