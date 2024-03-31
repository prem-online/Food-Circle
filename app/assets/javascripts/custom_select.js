$(document).ready(function() {
    // Your jQuery code here
    $('#new-order-table-body').click(function(e) {
        let isAddButton = e.target.className.includes('addbutton');
        let isClearButton = e.target.className.includes('clearbutton');
        if (isClearButton){
            let productId = e.target.className.split('-').pop();
            let quantityInput = document.getElementsByClassName(`product-quantity${productId}`)[0];
            quantityInput.value = ''
        }
        if (isAddButton) {
            let productId = e.target.className.split('-').pop();
            let addQuantity = e.target.className.split('-')[1];
            let quantityInput = document.getElementsByClassName(`product-quantity${productId}`)[0];
            let currentQty = quantityInput.value == '' ? 0 
            : parseInt(quantityInput.value)
            final_quantity = quantityInput.value == '' ? addQuantity 
            : parseInt(quantityInput.value)+ parseInt(addQuantity)
            quantityInput.value = final_quantity
            productPrice = parseInt(quantityInput.parentElement.previousElementSibling.innerText)
            calculateTotal(productPrice, parseInt(final_quantity),currentQty)
        }
    });
   
});


function calculateTotal(product_price, new_quantity, old_quantity) {
    let totalPrice = document.getElementById('new-order-total').innerText
    totalPrice = totalPrice == '' ? 0 : parseInt(totalPrice);
    let newPrice = (product_price*(new_quantity-old_quantity))+totalPrice
    document.getElementById('new-order-total').innerText = newPrice;
}
