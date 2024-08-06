
console.log('Hello from scripts');



document.getElementById("home").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.getElementById("newsletter").addEventListener("click", function (event) {
    event.preventDefault();
    var targetElement = document.getElementById("newsletter-form");
    var offset = -330;

    window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth"
    });
});

document.getElementById("live-shows").addEventListener("click", function (event) {
    event.preventDefault();
    var targetElement = document.getElementById("live-performances");
    var offset = -430;

    window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth"
    });
});

document.getElementById("store").addEventListener("click", function (event) {
    event.preventDefault();
    var targetElement = document.getElementById("merch");
    var offset = -1050;

    window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth"
    });
});

document.getElementsByClassName("to-cart").addEventListener("click", function (event) {
    event.preventDefault();
});

// document.getElementById("store").addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("Clicked on link");
//     var targetElement = document.getElementById("merchendise");
//     var offset = 210;

//     window.scrollTo({
//         top: targetElement.offsetTop - offset,
//         behavior: "smooth"
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    // Wait until the images are loaded
    window.addEventListener('load', function () {
        var otherPosters = document.getElementsByClassName("other-poster");

        Array.from(otherPosters).forEach((otherPoster) => {
            otherPoster.addEventListener("click", function (event) {
                event.preventDefault();
                var clickedImageSrc = this.querySelector('img').src;

                var currentPosterImg = document.getElementById("current-poster").querySelector("img");
                if (currentPosterImg) {
                    currentPosterImg.src = clickedImageSrc;
                } else {
                    console.log("Current poster image container not found!");
                }
            });
        });

    });

});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('load', function () {

    });
});


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('load', function () {
        var merch = document.getElementsByClassName("merch-item");

        Array.from(merch).forEach((merchendise) => {
            merchendise.addEventListener("click", function (event) {

                var itemId = this.getAttribute('item-id');
                confirm("Item has been added to cart")
            });
        });
    });
});



document.getElementById("form"), addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submitting...");
    var form = document.getElementById("form");
    var formData = new FormData(form);

    var request = new XMLHttpRequest();
    request.open("POST", document.getElementById("form").action);
    request.onload = function () {
        if (request.status === 200) {
            var response = JSON.parse(request.responseText);
            if (response.success) {
                document.getElementById("message").textContent = "Subscription successful!";
                document.getElementById("fname").value = "";
                document.getElementById("email").value = "";
            } else {
                document.getElementById("message").textContent = "Subscription failed, please try again!";
            }
        } else {
            // document.getElementById("message").textContent = "failed: " + request.statusText;
        }
    };
    request.send(formData);
});


const button = document.getElementById("buy-tickets");
button.addEventListener("click", () => {
    console.log("buying tickets...");
})


function handleResize() {

    var vidContainer = document.querySelector('.vid-container');
    var video = vidContainer.querySelector('video');

    var leftPos = (window.innerWidth - video.offsetWidth);

    video.style.left = leftPos + 'px';

    var windowWidth = window.innerWidth;
    // Set the width of the SVG dynamically
    var svg = document.getElementById('dynamic-svg');
    //svg.setAttribute('width', windowWidth);
}
window.addEventListener('resize', handleResize);
// handleResize()

