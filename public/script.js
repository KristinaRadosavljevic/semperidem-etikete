// Displaying the divs
var etiketeB = document.getElementById("etikete");
var cestitkeB = document.getElementById("cestitke");
var tagoviB = document.getElementById("tagovi");

var etikete = document.getElementById("etikete_div");
var cestitke = document.getElementById("cestitke_div");
var tagovi = document.getElementById("tagovi_div");

etiketeB.addEventListener("click", function etiketeF() {
    cestitke.style.display = "none";
    cestitkeB.className = "inactive";
    tagovi.style.display = "none";
    tagoviB.className = "inactive";
    if (etikete.style.display == "none" || etikete.style.display == ""){
        etikete.style.display = "block";
        etikete.scrollIntoView(false);
        etiketeB.className = "active";
    }
    else {
        etikete.style.display = "none";
        etiketeB.className = "inactive";
    }
});

cestitkeB.addEventListener("click", function cestitkeF() {
    etikete.style.display = "none";
    etiketeB.className = "inactive";
    tagovi.style.display = "none";
    tagoviB.className = "inactive";
    if (cestitke.style.display == "none" || cestitke.style.display == ""){
        cestitke.style.display = "block";
        cestitke.scrollIntoView(false);
        cestitkeB.className = "active";
    }
    else {
        cestitke.style.display = "none";
        cestitkeB.className = "inactive";
    }
});

tagoviB.addEventListener("click", function tagoviF() {
    etikete.style.display = "none";
    etiketeB.className = "inactive";
    cestitke.style.display = "none";
    cestitkeB.className = "inactive";
    if (tagovi.style.display == "none" || tagovi.style.display == ""){
        tagovi.style.display = "block";
        tagovi.scrollIntoView(false);
        tagoviB.className = "active";
    }
    else {
        tagovi.style.display = "none";
        tagoviB.className = "inactive";
    }
});

// Gallery variables
var prev = document.getElementsByClassName("prev");
var next = document.getElementsByClassName("next");
var close = document.getElementsByClassName("close");
var bigPictures = document.getElementsByClassName("in_gallery");
var galleryDiv = document.getElementsByClassName("gallery_view");

var etiketeI = document.getElementsByClassName("etikete_gallery");
var cestitkeI = document.getElementsByClassName("cestitke_gallery");
var tagoviI = document.getElementsByClassName("tagovi_gallery");

var etiketeG = [etiketeI[0].src, etiketeI[1].src, etiketeI[2].src];
var cestitkeG = [cestitkeI[0].src, cestitkeI[1].src, cestitkeI[2].src];
var tagoviG = [tagoviI[0].src, tagoviI[1].src, tagoviI[2].src];

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

etiketeI[0].addEventListener("click", function(){openGallery(0, 0, etiketeG)});
etiketeI[1].addEventListener("click", function(){openGallery(0, 1, etiketeG)});
etiketeI[2].addEventListener("click", function(){openGallery(0, 2, etiketeG)});
cestitkeI[0].addEventListener("click", function(){openGallery(1, 0, cestitkeG)});
cestitkeI[1].addEventListener("click", function(){openGallery(1, 1, cestitkeG)});
cestitkeI[2].addEventListener("click", function(){openGallery(1, 2, cestitkeG)});
tagoviI[0].addEventListener("click", function(){openGallery(2, 0, tagoviG)});
tagoviI[1].addEventListener("click", function(){openGallery(2, 1, tagoviG)});
tagoviI[2].addEventListener("click", function(){openGallery(2, 2, tagoviG)});

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
prev[0].addEventListener("click", function(){goToPrev(0, etiketeG)});
prev[1].addEventListener("click", function(){goToPrev(1, cestitkeG)});
prev[2].addEventListener("click", function(){goToPrev(2, tagoviG)});
next[0].addEventListener("click", function(){goToNext(0, etiketeG)});
next[1].addEventListener("click", function(){goToNext(1, cestitkeG)});
next[2].addEventListener("click", function(){goToNext(2, tagoviG)});

//Form submit
document.getElementById("submit").addEventListener("click", function(){
fetch('/form-submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: document.contact_form.name.value,
        email: document.contact_form.email.value,
        message: document.contact_form.message.value
    })
}).then(function(response){
    if(response.status == 200){
        var successHTML = '<h3 class="contact_heading">Imate pitanje ili želite da poručite?</h3><div id="success_div">Hvala Vam na interesovanju. Kontaktiraćemo Vas uskoro.</div>';
        document.getElementById("form_div").innerHTML = successHTML;
    }
    else{
        var failHTML = '<h3 class="contact_heading">Imate pitanje ili želite da poručite?</h3><div id="fail_div">Došlo je do greške. Molimo Vas pokušajte ponovo ili nas kontaktirajte putem mejla ili telefona.</div>';
        document.getElementById("form_div").innerHTML = failHTML;
    }
});
});

//Copyright year update
var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

//Change navigation logo if screen is too broad
var logoNav = document.getElementById("logoNav");
if(screen.availWidth < 900){
    logoNav.src = "images/semper-idem-logo.png";
}

//Product listing gallery function
function openListingGallery(obj) {
    var imgSrc = obj.src;
    document.getElementById("gallery_view").style.display = "block";
    document.getElementById("gallery_img").src = imgSrc;
};
function closeListingGallery() {
    document.getElementById("gallery_view").style.display = "none";
};