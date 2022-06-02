
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
let image = document.querySelectorAll("img");
image[0].src = "./Malinois.webp";
image[1].src = "./biathlon.jpg";
image[2].src = "./Frank-Slade.jpg";
image[3].src = "./dimi.png";
document.getElementsByTagName("h3")[3].innerHTML = "So i tried to guess. Even if i didn't, i was close at least with the actor!";
document.getElementsByTagName('h1')[0].innerHTML = "On this page i would like to present a few things about my dear coleague Lau";
document.getElementsByTagName('h3')[1].innerHTML = "Because sometimes a picture says more than 1000 words, here you can see his spirit animal!";
document.getElementsByTagName('h5')[1].innerHTML = "His favorite sport is Biathlon";
document.getElementsByTagName('h3')[2].innerHTML = "It is a very nice but very difficult sport where you have to be very good athlete, a sharp shooter in hard conditions - cold, wind, snow, exhaustion etc - and also smart enough to make a winner strategy";
document.getElementsByTagName('h3')[4].innerHTML = "A few of his hobbies are: traveling, music etc. Maybe i can make him have another one: to drink beers with me!";
document.getElementsByTagName('h5')[2].innerHTML = "His favorite celebrity, believe it or not, it actually <b>ME</b>!!!<br> Can you believe that?";
document.getElementsByTagName('h4')[1].innerHTML = "As an extra challenge i wanted to ask him to make Tony Montana look cool with CSS sunglasses. But in this picture, Frank Slade looks really cool with those awesome sunglasses! <b>Please leave them like this!</b>";
document.body.style.background = "#A3E7FC";
document.getElementsByClassName('col-2')[0].style.background = "#3F84E5";
document.getElementsByClassName('col-2')[1].style.background = "#3F84E5";
document.getElementsByClassName('col-2')[2].style.background = "#3F84E5";

