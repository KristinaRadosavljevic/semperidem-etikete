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
    poliB.className = "inactive";
    samolep.style.display = "none";
    samolepB.className = "inactive";
    karton.style.display = "none";
    kartonB.className = "inactive";
    if (saten.style.display == "none" || saten.style.display == ""){
        saten.style.display = "block";
        saten.scrollIntoView(false);
        satenB.className = "active";
    }
    else {
        saten.style.display = "none";
        satenB.className = "inactive";
    }
});

poliB.addEventListener("click", function poliF() {
    saten.style.display = "none";
    satenB.className = "inactive";
    samolep.style.display = "none";
    samolepB.className = "inactive";
    karton.style.display = "none";
    kartonB.className = "inactive";
    if (poli.style.display == "none" || poli.style.display == ""){
        poli.style.display = "block";
        poli.scrollIntoView(false);
        poliB.className = "active";
    }
    else {
        poli.style.display = "none";
        poliB.className = "inactive";
    }
});

samolepB.addEventListener("click", function samolepF() {
    saten.style.display = "none";
    satenB.className = "inactive";
    poli.style.display = "none";
    poliB.className = "inactive";
    karton.style.display = "none";
    kartonB.className = "inactive";
    if (samolep.style.display == "none" || samolep.style.display == ""){
        samolep.style.display = "block";
        samolep.scrollIntoView(false);
        samolepB.className = "active";
    }
    else {
        samolep.style.display = "none";
        samolepB.className = "inactive";
    }
});

kartonB.addEventListener("click", function kartonF() {
    poli.style.display = "none";
    poliB.className = "inactive";
    samolep.style.display = "none";
    samolepB.className = "inactive";
    saten.style.display = "none";
    satenB.className = "inactive";
    if (karton.style.display == "none" || karton.style.display == ""){
        karton.style.display = "block";
        karton.scrollIntoView(false);
        kartonB.className = "active";
    }
    else {
        karton.style.display = "none";
        kartonB.className = "inactive";
    }
});

// Gallery variables
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

// Opening the gallery view on the picture that was clicked
function openGallery(categoryIndex, pictureIndex, galleryArray){
    galleryDiv[categoryIndex].style.display = "block";
    bigPictures[categoryIndex].src = galleryArray[pictureIndex];
    if(pictureIndex == 0){
        prev[categoryIndex].style.display = "none";
        next[categoryIndex].style.display = "block";
    }
    else if(pictureIndex == 2){
        next[categoryIndex].style.display = "none";
        prev[categoryIndex].style.display = "block";
    }
    else{
        prev[categoryIndex].style.display = "block";
        next[categoryIndex].style.display = "block";
    };
};

satenI[0].addEventListener("click", function(){openGallery(0, 0, satenG)});
satenI[1].addEventListener("click", function(){openGallery(0, 1, satenG)});
satenI[2].addEventListener("click", function(){openGallery(0, 2, satenG)});
poliI[0].addEventListener("click", function(){openGallery(1, 0, poliG)});
poliI[1].addEventListener("click", function(){openGallery(1, 1, poliG)});
poliI[2].addEventListener("click", function(){openGallery(1, 2, poliG)});
samolepI[0].addEventListener("click", function(){openGallery(2, 0, samolepG)});
samolepI[1].addEventListener("click", function(){openGallery(2, 1, samolepG)});
samolepI[2].addEventListener("click", function(){openGallery(2, 2, samolepG)});
kartonI[0].addEventListener("click", function(){openGallery(3, 0, kartonG)});
kartonI[1].addEventListener("click", function(){openGallery(3, 1, kartonG)});
kartonI[2].addEventListener("click", function(){openGallery(3, 2, kartonG)});

// Closing the gallery
close[0].addEventListener("click", function(){
    galleryDiv[0].style.display = "none";
});
close[1].addEventListener("click", function(){
    galleryDiv[1].style.display = "none";
});
close[2].addEventListener("click", function(){
    galleryDiv[2].style.display = "none";
});
close[3].addEventListener("click", function(){
    galleryDiv[3].style.display = "none";
});

// Going through gallery
function goToPrev(index, galleryArray){
    bigPictures[index].src = galleryArray[galleryArray.indexOf(bigPictures[index].src) - 1];
    if(galleryArray.indexOf(bigPictures[index].src) < galleryArray.length - 1){
        next[index].style.display = "block";
    };
    if(galleryArray.indexOf(bigPictures[index].src) == 0){
        prev[index].style.display = "none";
    };
};
function goToNext(index, galleryArray){
    bigPictures[index].src = galleryArray[galleryArray.indexOf(bigPictures[index].src) + 1];
    if(galleryArray.indexOf(bigPictures[index].src) > 0){
        prev[index].style.display = "block";
    };
    if(galleryArray.indexOf(bigPictures[index].src) == galleryArray.length - 1){
        next[index].style.display = "none";
    };
};
prev[0].addEventListener("click", function(){goToPrev(0, satenG)});
prev[1].addEventListener("click", function(){goToPrev(1, poliG)});
prev[2].addEventListener("click", function(){goToPrev(2, samolepG)});
prev[3].addEventListener("click", function(){goToPrev(3, kartonG)});
next[0].addEventListener("click", function(){goToNext(0, satenG)});
next[1].addEventListener("click", function(){goToNext(1, poliG)});
next[2].addEventListener("click", function(){goToNext(2, samolepG)});
next[3].addEventListener("click", function(){goToNext(3, kartonG)});