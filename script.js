const form = document.getElementById('form');
// const messageContainer = document.querySelector('.message-container');
// const message = document.getElementById('message');
// let isValid = false;
const divs = document.getElementById('form').getElementsByTagName('div');
const result = document.getElementById('result');


function showHide1(elem) {
  //get the divs to show/hide  
  console.log('elem.selectedIndex', elem.selectedIndex);  
  if(elem.selectedIndex != 0) {
      //  hide unrelated divs
       for(let i=0; i < divs.length; i++) {
          divs[i].style.display = 'none';
          console.log('divs[i]',divs[i]);
      }
      //unhide the selected div
      document.getElementById('div'+elem.value).style.display = 'flex';
      console.log('elem.value', elem.value)
  }
}

function showHide2(elem) {
  console.log('elem.selectedIndex', elem.selectedIndex);
  if(elem.selectedIndex != 0) {
    for(let i=1; i < divs.length; i++) {
      console.log('i',i);
        divs[i].style.display = 'none';
        console.log('divs[i]',divs[i]);
    }
    document.getElementById('div'+elem.value).style.display = 'flex';
    console.log('elem.value', elem.value)
  }
}

function showHide3(elem) {
  console.log('elem.selectedIndex', elem.selectedIndex);
  if(elem.selectedIndex != 0) {
    for(let i=2; i < divs.length; i++) {
      console.log('i',i);
        divs[i].style.display = 'none';
        console.log('divs[i]',divs[i]);
    }
    document.getElementById('div'+elem.value).style.display = 'flex';
    console.log('elem.value', elem.value);
    result.value = [];
    console.log('result.value', result.value);
  }
}

// function storeFormData() {
//     const user = {
//       email: form.email.value,
//       business: form.business.value,
//       ownership: form.ownership.value,
//       transactions: form.transactions.value,
//       services: form.services.value
//     };
//     // Do something with user data
//     console.log(user);
//   }
  
  function processFormData(e) {
    e.preventDefault();
      //  storeFormData();      
  }

 
  // Event Listener
  form.addEventListener('submit', processFormData); 
  form.addEventListener('submit', calculate2); 


  function calculate2() {
    const fiftyTxn = document.getElementById('50txn-select').value;
    const oneFiftyTxn = document.getElementById('150txn-select').value;  
    const oneFiftyPlusTxn = document.getElementById('150+txn-select').value;  
    
    

    switch(fiftyTxn) {      
      // case '':
      // serviceRate1 = '1500-1800';
      // result.value = serviceRate1;  
      //   break;
      case 'consulting-business1':
        serviceRate1 = '1500';
        result.value = serviceRate1;  
        break;
      case 'holdings-company1':
        serviceRate1 = 1700; 
        result.value = serviceRate1;  
    }
    switch(oneFiftyTxn) {
      case 'consulting-business':
        serviceRate2 = 1800;
        result.value = serviceRate2; 
        break;
      case 'holdings-company':
        serviceRate2 = 2000;
        result.value = serviceRate2; 
        break;
      case 'trading-retail':
        serviceRate2 = 2500;
        result.value = serviceRate2;  
        break;
      case 'mortgage-incurance-broker':
        serviceRate2 = 1800;
        result.value = serviceRate2; 
        break;
      case 'home-renovation-contractor':
        serviceRate2 = 2300;
        result.value = serviceRate2; 
        break;
      case 'medical-professional-corporation':
        serviceRate2 = 2500;
        result.value = serviceRate2  
    }  
    switch(oneFiftyPlusTxn) {
      case 'consulting-business':
        serviceRate3 = 2500;
        result.value = serviceRate3; 
        break;
      case 'holdings-company':
        serviceRate3 = 2700;
        result.value = serviceRate3; 
        break;
      case 'trading-retail':
        serviceRate3 = 3200; 
        result.value = serviceRate3; 
        break;
      case 'manufacturing':
        serviceRate3 = 3500;
        result.value = serviceRate3; 
        break;
      case 'restaurant':
        serviceRate3 = 3500;
        result.value = serviceRate3; 
        break;  
      case 'mortgage-incurance-broker':        
        serviceRate3 = 2500;
        result.value = serviceRate3; 
        break;
      case 'home-renovation-contractor':
        serviceRate3 = 3000;
        result.value = serviceRate3; 
        break;
      case 'medical-professional-corporation':
        serviceRate3 = 3500;
        result.value = serviceRate3  
    }  

    
    
    // console.log('serviceRate',serviceRate);
    // console.log(businessRate);
    // console.log(ownership);
    // console.log(ownershipRate);  
    }

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


// close button
window.onload = function(){
  document.getElementById('button-close').onclick = function(){
      this.parentNode.parentNode
      .removeChild(this.parentNode);
      return false;
  };
};
  



