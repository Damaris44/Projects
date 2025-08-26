document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("photo-gallery");

    
    const photos = [
        "images/me.jpg.jpg",
        "images/me2.jpg",
        "images/ai.jpg",
        "images/book.jpg",
        "images/food.jpg",
        "images/productive.jpg"
    ];

    
    photos.forEach((photo, index) => {
        let img = document.createElement("img");
        img.src = photo;
        img.alt = `Photo ${index + 1}`;
        gallery.appendChild(img);
    });
});
