
        document.addEventListener("DOMContentLoaded", function() {
        const cartTable = document.querySelector('.cart-table tbody');

        // Retrieve cart items from local storage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Loop through cart items and generate table rows
        cartItems.forEach(item => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>
                    <div class="product-quantity-count">
                        <button class="dec qty-btn">-</button>
                        <input class="product-quantity-box" type="text" name="quantity" value="1">
                        <button class="inc qty-btn">+</button>
                    </div>
                </td>
                <td>${item.price}</td>
                <td><button class="remove-btn"><i class="sli-close"></i></button></td>
            `;
            cartTable.appendChild(newRow);
            });
            // Delegate click event listener to the tbody element
            cartTable.addEventListener('click', function(event) {
                if (event.target.classList.contains('remove-btn')) {
                    console.log('Remove button clicked');
                    removeFromCart(event);
                }
            });
        });

        function removeFromCart(event) {
            console.log('Remove from cart function called');
            // Get the row containing the remove button
            const row = event.target.closest('tr');

            // Get the name of the product to be removed
            const productName = row.querySelector('td:nth-child(2)').textContent;

            // Retrieve cart items from local storage
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            // Find the index of the item to be removed
            const index = cartItems.findIndex(item => item.name === productName);

            // Remove the item from the cartItems array
            if (index !== -1) {
                cartItems.splice(index, 1);
            }

            // Update the local storage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Remove the row from the table
            row.remove();
        }
 