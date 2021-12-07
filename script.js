// const form = document.getElementById('form');
// const messageContainer = document.querySelector('.message-container');
// const message = document.getElementById('message');
// let isValid = false;

function showHide(elem) {
  if(elem.selectedIndex != 0) {
       //hide the divs
       for(var i=0; i < divsO.length; i++) {
           divsO[i].style.display = 'none';
      }
      //unhide the selected div
      document.getElementById('div'+elem.value).style.display = 'block';
  }
}

window.onload=function() {
  //get the divs to show/hide
  divsO = document.getElementById("form").getElementsByTagName('div');
}

  // function storeFormData() {
  //   const user = {
  //     email: form.email.value,
  //     business: form.business.value,
  //     ownership: form.ownership.value,
  //     transactions: form.transactions.value,
  //     services: form.services.value
  //   };
  //   // Do something with user data
  //   console.log(user);
  // }
  
  // function processFormData(e) {
  //   e.preventDefault();
  //      storeFormData();      
  // }

  // function processFormData(e) {
  //   e.preventDefault();
  //   // Validate Form
  //   validateForm();
  //   // Submit Form if Valid
  //   if (isValid) {
  //     storeFormData();      
  //   }
  // }

  // Event Listener
//   form.addEventListener('submit', processFormData); 
//   form.addEventListener('submit', calculate2); 



// function calculate() {
//   const business = document.getElementById('business-select').value;
//   const ownership = document.getElementById('ownership-select').value;
//   const result = document.getElementById('result');

//   if (business == 'retail') {
//     businessRate = 1;
//   } else if (business == 'restaurant') {
//     businessRate = 2;
//   } else {
//     businessRate = 3;
//   }
//   if (ownership == 'sole-proprietorship') {
//     ownershipRate = 10;
//   } else if (ownership == 'partnership') {
//     ownershipRate = 20;
//   } else {
//     ownershipRate = 30;
//   }
//   result.value = businessRate * ownershipRate;
//   console.log(business);
//   console.log(businessRate);
//   console.log(ownership);
//   console.log(ownershipRate);
// }  


// function calculate2() {
//   const business = document.getElementById('business-select').value;
//   const ownership = document.getElementById('ownership-select').value;  
//   const result = document.getElementById('result');
  
//   switch(business) {
//     case "retail":
//       businessRate = 1;
//       break;
//     case "restaurant":
//       businessRate = 2;
//       break;
//     case "it-consulting":
//       businessRate = 3;
//   }
//   switch(ownership) {
//     case "sole-proprietorship":
//       ownershipRate = 10;
//       break;
//     case "partnership":
//       ownershipRate = 20;
//       break;
//     case "corporation":
//       ownershipRate = 30; 
//   }  
//   result.value = businessRate * ownershipRate;
//   console.log(business);
//   console.log(businessRate);
//   console.log(ownership);
//   console.log(ownershipRate);  
//   }


// close button
// window.onload = function(){
//   document.getElementById('close').onclick = function(){
//       this.parentNode.parentNode
//       .removeChild(this.parentNode);
//       return false;
//   };
// };
  



