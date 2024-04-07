$(document).ready(function() {
    
});










//     const initialContent = document.querySelectorAll('.product-row');
//     var initialUnsortedArray = Array.from(initialContent);
//     const initialProductNames = [];
//     const initialProductPrices = [];
//     initialUnsortedArray.forEach((ele)=> initialProductNames.push(ele.children[1].innerText));
//     initialUnsortedArray.forEach((ele)=> initialProductPrices.push(ele.children[2].innerText));
//     const bufferNames = initialProductNames;
//     Object.freeze(initialProductNames);
//     Object.freeze(initialProductPrices);
//     setInitialProductNames(initialProductNames);
//     sortProducts();

// function sortProducts(){
//     const sortProductName = document.getElementById('product-sort');
//     sortProductName.addEventListener('input', (e)=>{
//         sortedProducts(e.target.value);
//     })
// }
// function returnInitialProductnames(){
//     return JSON.parse(localStorage.getItem("products"));
// }

// function setInitialProductNames(names){
//     localStorage.setItem("products", JSON.stringify(names));
// }

// function setInitialProductprices(prices){
//     localStorage.setItem("prices", JSON.stringify(prices));
// }

// function sortedProducts(productName){
//     let arr = returnInitialProductnames();
//     arr.sort((a, b,name = productName) =>{
//         const regex = new RegExp(`${name.replace(/\s/g, "").toUpperCase()}`);
//         const startsWithName = (str) => regex.test(str.replace(/\s/g, "").toUpperCase());
//         let eleA = a.replace(/\s/g, "")
//         let eleB = b.replace(/\s/g, "")
//         if (startsWithName(eleA) && !startsWithName(eleB)) {
//             return -1; 
//         } else if (!startsWithName(eleA) && startsWithName(eleB)) {
//             return 1; 
//         } else {
//             return eleA.localeCompare(eleB); 
//         }
//     })
//     displayResultantProducts(arr);
// }
// function listSearchedProduct(productName){
//     const elementsArray = initialUnsortedArray;
//     elementsArray.sort((a, b,name = productName) => {
//         const regex = new RegExp(`${name.replace(/\s/g, "").toUpperCase()}`);
//         const startsWithName = (str) => regex.test(str.replace(/\s/g, "").toUpperCase());

//         let eleA = a.children[1].innerText.replace(/\s/g, "")
//         let eleB = b.children[1].innerText.replace(/\s/g, "")
  
//         if (startsWithName(eleA) && !startsWithName(eleB)) {
//             return -1; 
//         } else if (!startsWithName(eleA) && startsWithName(eleB)) {
//             return 1; 
//         } else {
//             return eleA.localeCompare(eleB); 
//         }
//     });
//     displayResultantProducts(elementsArray)
// };

// function displayResultantProducts(sortedArray){
//     console.log('#######################--SORTED--##############################')
//     console.log(sortedArray)

//     var sortedArray2 = sortedArray;
//     var UnsortedArray = Array.from(document.querySelectorAll('.product-row'))
//     console.log('########################--UNSORTED#############################')
//     console.log(UnsortedArray);
//     console.log('########################--INITIAL--UNSORTED#############################')
//     console.log(initialUnsortedArray);
//     UnsortedArray.forEach(function(element, index) {
        
//         element.children[1].innerText = sortedArray2[index]
//         // element.children[2].innerText = sortedArray2[index].children[2].innerText
//         // console.log(sortedArray2[index].children[1].innerText)

//     });
    
// }
