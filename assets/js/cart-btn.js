document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.product-action-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const product = button.closest('.product');
        const productName = product.querySelector('.product-title').textContent;
        const productPrice = parseFloat(product.querySelector('.product-price').textContent.replace('$', ''));
        const productImage = product.querySelector('.product-image img').src;

        // Create cart item object
        const cartItem = {
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        };

        // Retrieve existing cart items from local storage or initialize an empty array
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the item already exists in the cart
        const existingItemIndex = cartItems.findIndex(item => item.name === productName);
        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += 1;
        } else {
            // Add new item to cart items array
            cartItems.push(cartItem);
        }

        // Store updated cart items array in local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Redirect to shopping-cart.html without any query parameters
        const currentHostname = window.location.hostname;
        const shoppingCartURL = 'http://' + currentHostname + ':5501/shopping-cart.html';
        window.location.href = shoppingCartURL;
    }
});