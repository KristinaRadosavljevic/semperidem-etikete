//Lazy loading
var lazyLoadImages = document.querySelectorAll("img.lazy");
var lazyLoadThrottleTimeout;
function lazyLoad() {
    if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
    }
    lazyLoadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyLoadImages.forEach(function (img) {
            if (img.parentElement.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.src.replace("lazy/", "");
                img.classList.remove('lazy');
            }
        });
        if (lazyLoadImages.length == 0) {
            document.removeEventListener("scroll", lazyLoad);
            window.removeEventListener("resize", lazyLoad);
            window.removeEventListener("orientationChange", lazyLoad);
        }
    }, 20);
}
document.addEventListener("scroll", lazyLoad);
window.addEventListener("resize", lazyLoad);
window.addEventListener("orientationChange", lazyLoad);

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
    var newSrc = imgSrc.replace("thumbnail", "gallery");
    document.getElementById("gallery_view").style.display = "block";
    document.getElementById("gallery_img").src = newSrc;
};
function closeListingGallery() {
    document.getElementById("gallery_img").src = "";
    document.getElementById("gallery_view").style.display = "none";
};