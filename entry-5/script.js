document.getElementById("item1").addEventListener("mouseenter", function() {
    document.getElementById("audio1").play();  // Play sound on hover
});

document.getElementById("item1").addEventListener("mouseleave", function() {
    document.getElementById("audio1").pause();  // Stop sound on hover out
    document.getElementById("audio1").currentTime = 0;  // Reset sound to the beginning
});

document.getElementById("item2").addEventListener("mouseenter", function() {
    document.getElementById("audio2").play();  // Play sound on hover
});

document.getElementById("item2").addEventListener("mouseleave", function() {
    document.getElementById("audio2").pause();  // Stop sound on hover out
    document.getElementById("audio2").currentTime = 0;  // Reset sound to the beginning
});

document.getElementById("item3").addEventListener("mouseenter", function() {
    document.getElementById("audio3").play();  // Play sound on hover
});

document.getElementById("item3").addEventListener("mouseleave", function() {
    document.getElementById("audio3").pause();  // Stop sound on hover out
    document.getElementById("audio3").currentTime = 0;  // Reset sound to the beginning
});
