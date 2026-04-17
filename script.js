const gallery = document.querySelector(".gallery")

const lightBox = document.querySelector(".lightbox")

const button = document.querySelector("#close-btn")

const galleryImg = document.querySelectorAll(".gallery-item")

const lightBoxImg = document.querySelector("#lightbox-image")


function displayImg(thumbnail){

    const thumSource = thumbnail.getAttribute("src");

    const fullThumbnail = thumSource.replace("-thumbnail", "");


    lightBoxImg.src = fullThumbnail

    lightBox.style.display = "flex";
}

button.addEventListener("click", () => {
    lightBox.style.display = "none";
})

lightBox.addEventListener("click", (e) => {
    if (e.target === lightBox) {
        lightBox.style.display = "none";
    }
})

galleryImg.forEach(gallery => {
    gallery.addEventListener("click", () => {
        displayImg(gallery)
    })
})

