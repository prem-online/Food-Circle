// // 'use strict';
// $(document).ready(function () {
//   handleQuantitySelect();
// });
// function handleQuantitySelect() {
//   const quantity_clms = document.querySelectorAll(
//     "span.select2-selection__rendered"
//   );
//   const quantityItemSpan = document.querySelectorAll("td.col-quantity")[0].querySelector('span');
//   debugger
//   if (!quantity_clms) {
//     window.setTimeout(handleQuantitySelect, 500);
//     return;
//   }

//   const observer = new MutationObserver((list) => {
//     debugger
//     console.log("MutationObserver");
//     console.log(list[0].target)
//     // let quantitySpan = list[list.length - 1].target;
//     // const foodItemTd = document.querySelectorAll("td.col-food_item");
//     // let selectedFoodItemSpan = foodItemTd[foodItemTd.length - 1].querySelector(
//     //   "span.select2-selection__rendered"
//     // ).innerText;

    
//     // if (selectedFoodItemSpan != "") {
//     //   appendNewTd(foodItemTd[foodItemTd.length - 1]);
//     // }


//   });

//   // observer.observe(quantity_clms[quantity_clms.length - 1], {
//   //   attributes: true,
//   //   childList: true,
//   //   subtree: true,
//   // });
//   observer.observe(quantityItemTd[0], {
//     attributes: true,
//     childList: true,
//     subtree: true,
//   });


  
// }
// function appendNewTd(orderLastRow) {
//   let lastTr = orderLastRow.parentElement;

//     let liHTML2 = document.createElement('li');
//     liHTML2.className = 'searchable_select input optional';
//     liHTML2.id = 'order_food_item_ids_input';
//     liHTML2.innerHTML = `
//         <select
//         name="order[food_item_ids]"
//         id="order_food_item_ids"
//         class="searchable-select-input"
//         tabindex="0"
//         aria-hidden="false"
//         onchange="myFunction()"
//       >
//         <option value="" label=" "></option>
//         <option value="1">Anda Kari</option>
//         <option value="2">Omellete</option>
//         <option value="3">Thali | 99</option>
//         <option value="4">Samosa | Full</option>
//         <option value="5">Fish Fry</option>
//       </select>
//     `

//     let liQuantity = document.createElement('li');
//     liQuantity.className = 'searchable_select input optional';
//     liQuantity.id = 'order_quantity_input';
//     liQuantity.innerHTML =`
//       <select name="order[quantity]" id="order_quantity" class="searchable-select-input" tabindex="0" aria-hidden="false">
//         <option value="" label=" "></option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//         <option value="8">8</option>
//         <option value="9">9</option>
//         <option value="10">10</option>
//         <option value="11">11</option>
//         <option value="12">12</option>
//         <option value="13">13</option>
//         <option value="14">14</option>
//         <option value="15">15</option>
//         <option value="16">16</option>
//         <option value="17">17</option>
//         <option value="18">18</option>
//         <option value="19">19</option>
//         <option value="20">20</option>
//         <option value="21">21</option>
//         <option value="22">22</option>
//         <option value="23">23</option>
//         <option value="24">24</option>
//         <option value="25">25</option>
//         <option value="26">26</option>
//         <option value="27">27</option>
//         <option value="28">28</option>
//         <option value="29">29</option>
//         <option value="30">30</option>
//       </select>
//     `;

//   // here tr attributes are completely added
//   // debugger
//   lastTr.firstElementChild.prepend(liHTML2);
//   lastTr.lastElementChild.prepend(liQuantity);
// }

// // order_quantity_input
// function addNewOrderRow() {
//   console.log("rocking");
//   // console.log(ele.firstElementChild.firstElementChild.value);
// }

// function myFunction(){
//   console.log("myFunction");
// }