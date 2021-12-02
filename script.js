let colors = ["white", "black"],   // the color choices
    index = 0;                                     // index of the current color

let box = document.querySelector(".box3")
document.getElementById("colorify").onclick = function() {
    document.body.style.background = colors[index];  // set the color of body to the current color
    box.style.background = colors[index];
    index = (index + 1) % colors.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
}



// Modal

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}