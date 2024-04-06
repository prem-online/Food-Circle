$(document).ready(function() {
    sortProducts();
})

function sortProducts(){
    const sortProductName = document.getElementById('product-sort');
    sortProductName.addEventListener('input', (e)=>{
        listSearchedProduct(e.target.value);
    })
}

function listSearchedProduct(productName){
    const elements = document.querySelectorAll('.product-row');
    const elementsArray = Array.from(elements);
    elementsArray.sort((a, b,name = productName) => {
        const regex = new RegExp(`${name.replace(/\s/g, "").toUpperCase()}`);
        const startsWithName = (str) => regex.test(str.replace(/\s/g, "").toUpperCase());

        let eleA = a.children[1].innerText.replace(/\s/g, "")
        let eleB = b.children[1].innerText.replace(/\s/g, "")
  
        if (startsWithName(eleA) && !startsWithName(eleB)) {
            return -1; 
        } else if (!startsWithName(eleA) && startsWithName(eleB)) {
            return 1; 
        } else {
            return eleA.localeCompare(eleB); 
        }
    });
};

function displayResultantProducts(){
    
}