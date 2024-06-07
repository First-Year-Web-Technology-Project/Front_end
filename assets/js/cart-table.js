document.addEventListener("DOMContentLoaded", function() {
    const cartTable = document.querySelector('.cart-table tbody');
    const mobileCart = document.querySelector('.cart-products-mobile');

    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Function to render cart items in both desktop and mobile views
    function renderCartItems() {
        cartTable.innerHTML = '';
        mobileCart.innerHTML = '';

        cartItems.forEach((item, index) => {
            // Add item to desktop cart
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" width="90" height="103"></td>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>
                    <div class="product-quantity-count">
                        <button class="dec qty-btn" data-index="${index}">-</button>
                        <input class="product-quantity-box" type="text" name="quantity" value="${item.quantity}">
                        <button class="inc qty-btn" data-index="${index}">+</button>
                    </div>
                </td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="remove-btn" data-index="${index}"><i class="sli-close"></i></button></td>
            `;
            cartTable.appendChild(newRow);

            // Add item to mobile cart
            const newMobileItem = document.createElement('div');
            newMobileItem.className = 'cart-product-mobile';
            newMobileItem.innerHTML = `
                <div class="cart-product-mobile-thumb">
                    <img src="${item.image}" alt="${item.name}" width="90" height="103">
                    <button class="cart-product-mobile-remove" data-index="${index}"><i class="sli-close"></i></button>
                </div>
                <div class="cart-product-mobile-content">
                    <h5 class="cart-product-mobile-title">${item.name}</h5>
                    <span class="cart-product-mobile-quantity">${item.quantity} x ${item.price}</span>
                    <span class="cart-product-mobile-total"><b>Total:</b> ${(item.price * item.quantity).toFixed(2)}</span>
                    <div class="product-quantity-count">
                        <button class="dec qty-btn" data-index="${index}">-</button>
                        <input class="product-quantity-box" type="text" name="quantity" value="${item.quantity}">
                        <button class="inc qty-btn" data-index="${index}">+</button>
                    </div>
                </div>
            `;
            mobileCart.appendChild(newMobileItem);
        });
    }

    // Initial rendering of cart items
    renderCartItems();

    // Event listener for quantity changes and removals
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-btn') || event.target.classList.contains('cart-product-mobile-remove')) {
            const index = event.target.dataset.index;
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            renderCartItems();
        } else if (event.target.classList.contains('dec') || event.target.classList.contains('inc')) {
            const index = event.target.dataset.index;
            const input = document.querySelectorAll(`input.product-quantity-box[data-index="${index}"]`);
            let quantity = parseInt(cartItems[index].quantity);
            if (event.target.classList.contains('dec')) {
                quantity = quantity > 1 ? quantity - 1 : 1;
            } else if (event.target.classList.contains('inc')) {
                quantity = quantity + 1;
            }
            cartItems[index].quantity = quantity;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            renderCartItems();
        }
    });
});