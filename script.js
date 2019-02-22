// Displaying the divs
var satenB = document.getElementById("usivne_saten");
var poliB = document.getElementById("usivne_poli");
var samolepB = document.getElementById("samolepljive");
var kartonB = document.getElementById("kartonske");

var saten = document.getElementById("usivne_saten_div");
var poli = document.getElementById("usivne_poli_div");
var samolep = document.getElementById("samolepljive_div");
var karton = document.getElementById("kartonske_div");

satenB.addEventListener("click", function satenF() {
    poli.style.display = "none";
    poliB.style.backgroundColor = "transparent";
    samolep.style.display = "none";
    samolepB.style.backgroundColor = "transparent";
    karton.style.display = "none";
    kartonB.style.backgroundColor = "transparent";
    if (saten.style.display == "none"){
        saten.style.display = "block";
        saten.scrollIntoView(false);
        satenB.style.backgroundColor = "#cc7a00";
    }
    else {
        saten.style.display = "none";
        satenB.style.backgroundColor = "transparent";
    }
});

poliB.addEventListener("click", function poliF() {
    saten.style.display = "none";
    satenB.style.backgroundColor = "transparent";
    samolep.style.display = "none";
    samolepB.style.backgroundColor = "transparent";
    karton.style.display = "none";
    kartonB.style.backgroundColor = "transparent";
    if (poli.style.display == "none"){
        poli.style.display = "block";
        poli.scrollIntoView(false);
        poliB.style.backgroundColor = "#cc7a00";
    }
    else {
        poli.style.display = "none";
        poliB.style.backgroundColor = "transparent";
    }
});

samolepB.addEventListener("click", function samolepF() {
    saten.style.display = "none";
    satenB.style.backgroundColor = "transparent";
    poli.style.display = "none";
    poliB.style.backgroundColor = "transparent";
    karton.style.display = "none";
    kartonB.style.backgroundColor = "transparent";
    if (samolep.style.display == "none"){
        samolep.style.display = "block";
        samolep.scrollIntoView(false);
        samolepB.style.backgroundColor = "#cc7a00";
    }
    else {
        samolep.style.display = "none";
        samolepB.style.backgroundColor = "transparent";
    }
});

kartonB.addEventListener("click", function kartonF() {
    poli.style.display = "none";
    poliB.style.backgroundColor = "transparent";
    samolep.style.display = "none";
    samolepB.style.backgroundColor = "transparent";
    saten.style.display = "none";
    satenB.style.backgroundColor = "transparent";
    if (karton.style.display == "none"){
        karton.style.display = "block";
        karton.scrollIntoView(false);
        kartonB.style.backgroundColor = "#cc7a00";
    }
    else {
        karton.style.display = "none";
        kartonB.style.backgroundColor = "transparent";
    }
});

// Gallery
var prev = document.getElementsByClassName("prev");
var next = document.getElementsByClassName("next");
var close = document.getElementsByClassName("close");
var bigPictures = document.getElementsByClassName("in_gallery");
var galleryDiv = document.getElementsByClassName("gallery_view");

var satenI = document.getElementsByClassName("saten_gallery");
var poliI = document.getElementsByClassName("poli_gallery");
var samolepI = document.getElementsByClassName("samolep_gallery");
var kartonI = document.getElementsByClassName("karton_gallery");

var satenG = [satenI[0].src, satenI[1].src, satenI[2].src];
var poliG = [poliI[0].src, poliI[1].src, poliI[2].src];
var samolepG = [samolepI[0].src, samolepI[1].src, samolepI[2].src];
var kartonG = [kartonI[0].src, kartonI[1].src, kartonI[2].src];