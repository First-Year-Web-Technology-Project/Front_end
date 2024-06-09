document.addEventListener("DOMContentLoaded", function() {
    const checkoutTableBody = document.querySelector('.checkout-summary-table tbody');

    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Function to render cart items in checkout summary table
    function renderCheckoutItems() {
        checkoutTableBody.innerHTML = '';

        let total = 0;

        cartItems.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${item.name} x ${item.quantity}</td>
                <td>$${itemTotal.toFixed(2)}</td>
            `;
            checkoutTableBody.appendChild(newRow);
        });

        // Add discount row
        const discountRow = document.createElement('tr');
        discountRow.innerHTML = `
            <td class="border-top">Discount</td>
            <td class="border-top">0.2%</td>
        `;
        checkoutTableBody.appendChild(discountRow);

        // Add shipping fee row
        const shippingRow = document.createElement('tr');
        shippingRow.innerHTML = `
            <td class="border-top">Shipping Fee</td>
            <td class="border-top">$10.00</td>
        `;
        checkoutTableBody.appendChild(shippingRow);

        // Calculate and update grand total
        const grandTotalRow = document.querySelector('.checkout-summary-table tfoot .border-top');
        const grandTotal = total - total * 0.2/100 + 10; // Add shipping fee to total
        grandTotalRow.nextElementSibling.textContent = `$${grandTotal.toFixed(2)}`;
    }

    // Render checkout items when DOM content is loaded
    renderCheckoutItems();
});