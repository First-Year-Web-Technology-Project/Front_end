
        document.addEventListener('DOMContentLoaded', function() {
            const addToCartButtons = document.querySelectorAll('.product-action-btn');

            addToCartButtons.forEach(button => {
                button.addEventListener('click', addToCart);
            });

            function addToCart(event) {
                const button = event.target;
                const product = button.closest('.product');
                const productName = product.querySelector('.product-title').textContent;
                const productPrice = product.querySelector('.product-price').textContent;
                const productImage = product.querySelector('.product-image img').src;

                // Create cart item object
                const cartItem = {
                    name: productName,
                    price: productPrice,
                    image: productImage
                };

                // Retrieve existing cart items from local storage or initialize an empty array
                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

                // Add new item to cart items array
                cartItems.push(cartItem);

                // Store updated cart items array in local storage
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                // Redirect to shopping-cart.html without any query parameters
                window.location.href = 'http://127.0.0.1:5501/shopping-cart.html';
            }
        });
