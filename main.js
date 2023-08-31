let isDarkModeActivated = false;

const btn = document.querySelector("button");
const card = document.getElementById("card")

//define function when HTML charged 
document.addEventListener("DOMContentLoaded", () =>{
  isDarkModeActivated = !isDarkModeActivated;
 
  if (isDarkModeActivated) {
    console.log("LIGHT MODE ACTIVATED");
    btn.innerHTML = "Light Mode";
    // add btn-dark class
    btn.classList.add("btn-dark")
    card.classList.add("text-bg-dark")

  } else {
    console.log("DARK MODE ACTIVATED");
    btn.innerHTML = "Dark mode";
    btn.classList.replace("btn-dark", "btn-light")

    card.classList.replace("text-bg-dark", "text-bg-light" )
    

   
  }
  // button and also card is dark and light by using add even listener at the top
  
  console.log("PAGE CONTENT LOADED");
});

const toggleDarkMode = () => {
  isDarkModeActivated = !isDarkModeActivated;
  if (isDarkModeActivated) {
    console.log("LIGHT MODE ACTIVATED");
    btn.innerHTML = "Light Mode";
    // add btn-dark class
    btn.classList.add("btn-dark")
    card.classList.add("text-bg-dark")

  } else {
    console.log("DARK MODE ACTIVATED");
    btn.innerHTML = "Dark mode";
    btn.classList.replace("btn-dark", "btn-light")

    card.classList.replace("text-bg-dark", "text-bg-light" )
    

   
  }
};


