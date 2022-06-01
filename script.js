
// I force my counter to be global.. it's on purpose! only god can judge me
counter = 0;
// code was already here.. i'll use it later
Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

// darkmode exercise solved!
document.getElementById("modeSelect").addEventListener("click", function(){
    if (document.body.className === "darkMode"){
        document.body.setAttribute("class", "lightMode");
        console.log("flipping the switch!");
    } else {
        document.body.setAttribute("class", "darkMode");
        console.log("backflip!");
    }
});
document.getElementById('change1').innerHTML = "Lau is my team mate for this project";
document.getElementById('change2').innerHTML = "Team player";
document.getElementById('change3').innerHTML = "Friendly";
document.getElementById('change4').innerHTML = "Ambitious";
