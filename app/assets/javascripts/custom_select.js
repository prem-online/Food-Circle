$(document).ready(function() {
    // Your jQuery code here
    $('#new-order-table-body').click(function(e) {
        let isAddButton = e.target.className.includes('addbutton');
        if (isAddButton) {
            let productId = e.target.className.split('-').pop();
            let addQuantity = e.target.className.split('-')[1];
            let quantityInput = document.getElementsByClassName(`product-quantity${productId}`)[0];
            quantityInput.value = quantityInput.value == '' ? addQuantity : parseInt(quantityInput.value)+ parseInt(addQuantity)
            console.log(quantityInput);
        }
    });
   
});

