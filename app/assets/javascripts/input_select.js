$(document).ready(function() {
    // Your jQuery code here
    $('#new-order-table-body').click(function(e) {
        let isAddButton = e.target.className.includes('addbutton');
        let isClearButton = e.target.className.includes('clearbutton');
        if (isClearButton){
            let productId = e.target.className.split('-').pop();
            let quantityInput = document.getElementsByClassName(`product-quantity${productId}`)[0];
            let parentClass = quantityInput.parentElement.parentElement.className
            if (parentClass.includes('added')){
                quantityInput.parentElement.parentElement.className = parentClass.replace('product-added','');
            }
            let productPrice = parseInt(quantityInput.parentElement.previousElementSibling.innerText)
            let currentQty = quantityInput.value == '' ? 0 
            : parseInt(quantityInput.value)
            adjustTotal(productPrice, 0, currentQty);
            quantityInput.value = '';

        }
        if (isAddButton) {
            let productId = e.target.className.split('-').pop();
            let addQuantity = e.target.className.split('-')[1];
            let quantityInput = document.getElementsByClassName(`product-quantity${productId}`)[0];
            let parentClass = quantityInput.parentElement.parentElement.className
            if (!parentClass.includes('added')){
                quantityInput.parentElement.parentElement.className = parentClass+ ' product-added'
            }
            let currentQty = quantityInput.value == '' ? 0 
            : parseInt(quantityInput.value)
           
            let final_quantity = quantityInput.value == '' ? addQuantity 
            : parseInt(quantityInput.value)+ parseInt(addQuantity)

            quantityInput.value = final_quantity // updating quantity to input box

            let productPrice = parseInt(quantityInput.parentElement.previousElementSibling.innerText)
            calculateTotal(productPrice, parseInt(final_quantity),currentQty)
        }
    });
   
});

function adjustTotal(product_price, new_quantity, old_quantity) {
    let totalPrice = document.getElementById('new-order-total').innerText;
    totalPrice = totalPrice == '' ? 0 : parseInt(totalPrice);
    let newPrice = totalPrice - (product_price*(old_quantity-new_quantity))
    document.getElementById('new-order-total').innerText = newPrice;
}

function calculateTotal(product_price, new_quantity, old_quantity) {
    let totalPrice = document.getElementById('new-order-total').innerText
    totalPrice = totalPrice == '' ? 0 : parseInt(totalPrice);
    let newPrice = (product_price*(new_quantity-old_quantity))+totalPrice
    document.getElementById('new-order-total').innerText = newPrice;
}
