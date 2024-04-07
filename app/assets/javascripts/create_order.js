hostUrl = 'http://localhost:3000/'
function createOrder(){
    const addedProducts = document.querySelectorAll('.product-added');
    convertHTMLProductsToJsonData(addedProducts);
}

function convertHTMLProductsToJsonData(HTMLProducts){
    if (HTMLProducts.length == 0) return void 0;
    let HPArray = Array.from(HTMLProducts)
    
    const productsArray = [];
    let total=0;
    let price = 0;
    let quantity = 0;
    HPArray.forEach((ele)=>
    {   
        price = Number(ele.children[2].innerText);
        quantity = Number(ele.children[3].children[0].value);
        total = total + (price * quantity);
        productsArray.push(
            {
                "product_id": ele.dataset.id,
                "name": ele.children[1].innerText,
                "item_price": ele.children[2].innerText,
                "quantity": ele.children[3].children[0].value,
            }
        )
    });

    let jsonData = {
        "order_items": productsArray,
        "total": total
    }
    sentPostRequest(jsonData);
}

function sentPostRequest(data){
    const apiUrl = `${hostUrl}api/v1/orders`;
    // Configuration for the fetch request
    const fetchOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' // Specify the content type as JSON
    },
    body: JSON.stringify(data) // Convert the data to JSON format
    };

    // Make the POST request using Fetch
    fetch(apiUrl, fetchOptions)
    .then(response => {
        // Check if the request was successful
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Do something with the data returned by the API
        displaySuccessMsg(data)
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the operation:', error);
    });

    
}

function displaySuccessMsg(data){
    const flashContainer = document.querySelectorAll('.flashes')[0];
    flashContainer.innerHTML =`
    <div class="flash flash_notice">${data.meta.message}</div>
    `
    setTimeout(function() {
        // Code to execute after 3 seconds
        location.reload(true);
      }, 3000); // 3000 milliseconds = 3 seconds
      
}