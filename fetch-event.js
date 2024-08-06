function fetchEvents() {
    console.log("function working");
    $.ajax({
        type: "GET",
        url: 'https://nyxsolutions.co.ke/rage.machine/fetch-events.php',
        dataType: 'json',
        success: function (obj, textstatus) {
            if (!('error' in obj)) {
                console.log("success...")
                const eventsContainer = document.getElementById('poster-scroll');
                obj.data.forEach(event => {
                    console.log("producing: " + event.location);
                    const eventElement = document.createElement('div');
                    eventElement.classList.add('other-poster');

                    // const eventBanner = document.createElement('div');
                    // eventBanner.classList.add('banner')
                    // const eventName = document.createElement('p');
                    // eventName.textContent = event.name;
                    // const eventPrice = document.createElement('p');
                    // eventPrice.textContent = event.price;

                    const eventImage = document.createElement('img');
                    eventImage.src = event.poster;
                    eventImage.alt = 'event Image';

                    // eventElement.appendChild(eventBanner);
                    // eventBanner.appendChild(eventName);
                    // eventBanner.appendChild(eventPrice);
                    eventElement.appendChild(eventImage);

                    eventsContainer.appendChild(eventElement);
                });
            } else {
                console.log(obj.error);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("AJAX request failed:", textStatus, errorThrown); // Log any AJAX request failure
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired');
    fetchEvents()
});