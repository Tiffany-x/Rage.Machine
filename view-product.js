document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const globalId = urlParams.get('id');
    console.log("viewing...");
    console.log(window.globalId);

    $.ajax({
        type: "GET",
        url: 'https://nyxsolutions.co.ke/Tiffany/rage-machine/view-product.php?id=' + window.globalId,
        dataType: 'json',
        success: function (obj, textStatus) {
            if (!('error' in obj)) {
                console.log("success...");
                const productsContainer = document.getElementById('product-display');
                obj.data.forEach(product => {
                    console.log("producing: " + product.name);

                    const productImage = document.createElement('div');
                    productImage.classList.add('product-image');

                    const image = document.createElement('img');
                    image.src = product.image;
                    productImage.appendChild(image);

                    const productDetails = document.createElement('div');
                    productDetails.classList.add('product-details');

                    const productName = document.createElement('p');
                    productName.textContent = product.name;

                    const productPrice = document.createElement('p');
                    productPrice.textContent = product.price;

                    productDetails.appendChild(productName);
                    productDetails.appendChild(productPrice)

                    productImage.alt = 'Product Image';

                    document.productsContainer.appendChild(productImage);
                    document.productsContainer.appendChild(productDetails);
                });
            } else {
                console.log(obj.error);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("AJAX request failed:", textStatus, errorThrown); // Log any AJAX request failure
        }
    });

}

)
