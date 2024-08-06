
document.addEventListener('DOMContentLoaded', function () {

    $.ajax({
        type: "GET",
            url: 'https://nyxsolutions.co.ke/rage.machine/fetch-apparel.php',
        dataType: 'json',
        success: function (obj, textStatus) {
            if (!('error' in obj)) {
                console.log("success...");
                // Clear existing products before appending new ones
                document.getElementById("flex-merch").innerHTML = '';
                // Append new products to the container
                const productsContainer = document.getElementById('flex-merch');
                obj.data.forEach(product => {
                    console.log("producing: " + product.name);
                    const productElement = document.createElement('div');
                    productElement.classList.add('merch-item');
                    const itemId = product.id;
                    productElement.setAttribute('item-id', itemId);
                    const productBanner = document.createElement('div');
                    productBanner.classList.add('banner');
                    const productName = document.createElement('p');
                    productName.textContent = product.name;
                    const productPrice = document.createElement('p');
                    productPrice.textContent = product.price;
                    const productImage = document.createElement('img');
                    productImage.src = product.image;
                    productImage.alt = 'Product Image';

                    const productAdd = document.createElement('div');
                    productAdd.classList.add('to-cart');
                    const toCart = document.createElement('p');
                    toCart.textContent = "Add to cart";

                    productAdd.appendChild(toCart);
                    productElement.appendChild(productBanner);
                    productBanner.appendChild(productName);
                    productBanner.appendChild(productPrice);
                    productBanner.appendChild(productAdd);
                    productElement.appendChild(productImage);
                    productsContainer.appendChild(productElement);
                });
            } else {
                console.log(obj.error);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("AJAX request failed:", textStatus, errorThrown); // Log any AJAX request failure
        }
    });
});
