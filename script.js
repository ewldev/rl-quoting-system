// const form = document.getElementById('form');
// const messageContainer = document.querySelector('.message-container');
// const message = document.getElementById('message');
// let isValid = false;
const divs = document.getElementById('form').getElementsByTagName('div');
const category1 = document.getElementById('category1');
const compilation = document.getElementById('compilation-txn');
const reviewEgmt = document.getElementById('review-txn');
const auditEgmt = document.getElementById('audit-txn');
const fiftyTxn = document.getElementById('50txn-service');
const oneFiftyTxn = document.getElementById('150txn-service');  
const oneFiftyPlusTxn = document.getElementById('150uptxn-service'); 
let serviceRate = 0;

function showHide1(elem1) {
  //get the divs to show/hide  
  if(elem1.selectedIndex != 0) {
      //  hide unrelated divs
       for(let i=0; i < divs.length; i++) {
          divs[i].style.display = 'none';          
      }
      //unhide the selected div
      document.getElementById('div'+elem1.value).style.display = 'flex';      
  }
  resetCategory();
}

function showHide2(elem2) {
  if(elem2.selectedIndex != 0) {
    for(let i=1; i < divs.length; i++) {
        divs[i].style.display = 'none';        
    }
    document.getElementById('div'+elem2.value).style.display = 'flex';
  }
 console.log('elem2.value',elem2.value);
  setRequired2(elem2);  
  resetTransactions();
 }

function setRequired2 (elem2) {
  if (elem2.value == '4' ) {
    compilation.required = true;
    reviewEgmt.required = false;
    auditEgmt.required = false;
  } else if (elem2.value == '5') {
    compilation.required = false;
    reviewEgmt.required = true;
    auditEgmt.required = false;
  } else if (elem2.value == '6') {
    compilation.required = false;
    reviewEgmt.required = false;
    auditEgmt.required = true;
 }
  console.log('elem2.value',elem2.value);
 }

function showHide3(elem3) {
  if(elem3.selectedIndex != 0) {
    for(let i=4; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }    
    document.getElementById('div'+elem3.value).style.display = 'flex';
  }
  resetValues(); //remove previous transaction and serviceRate values when compilation transactions are changed, allowing new values to be pulled  
}
  
function processFormData(e) {
    e.preventDefault();
      //  storeFormData();      
}
 
  // Event Listener
  form.addEventListener('submit', processFormData);     
  form.addEventListener('submit', calculate); 
  
  
  function resetCategory() {
    category1.value = '';
    console.log('category1 value reset',category1.value);
  }

  function resetTransactions() {
    compilation.value = '';
    reviewEgmt.value = '';
    auditEgmt.value = '';
    console.log('complilation value reset',compilation.value);
    console.log('reviewEgmt value reset',reviewEgmt.value);
    console.log('auditEgmt value reset',auditEgmt.value);     
  }

  function resetValues() {
    fiftyTxn.value = '';
    oneFiftyTxn.value = ''; 
    oneFiftyPlusTxn.value = '';  
    serviceRate = 0;
    console.log('fiftyTxn value reset',fiftyTxn.value);
    console.log('oneFiftyTxn value reset',oneFiftyTxn.value);
    console.log('oneFiftyPlusTxn value reset',oneFiftyPlusTxn.value);     
    console.log ('serviceRate reset',serviceRate);
  }

  function calculate() {      
    console.log('fiftyTxn value calculate start',fiftyTxn.value);
    console.log('oneFiftyTxn value calculate start',oneFiftyTxn.value);
    console.log('oneFiftyPlusTxn value calculate start',oneFiftyPlusTxn.value); 
    console.log ('serviceRate calculate start',serviceRate);    
    // for (let i=0; i<fiftyTxn1.length; i++) {
    //   fiftyTxn1.remove(i)
    // }
    // console.log('fiftyTxn1',fiftyTxn1);
    // console.log('fiftyTxn1.length',fiftyTxn1.options.length);
    
    switch(compilation.value) {
      case '7':
        serviceRate = '1500-1800';
        result.value = serviceRate;
        break;
      case '8':
        serviceRate = '1800-2500';
        result.value = serviceRate;
        break;
      case '9':
        serviceRate = '2500-3500'; 
        result.value = serviceRate; 
        break;
      default:
         break;  
    }

    switch(reviewEgmt.value) {
      case '10':
        serviceRate = '5500-7500';
        result.value = serviceRate;
        break;
      default:
        break;  
    }

    switch(auditEgmt.value) {
      case '11':
        serviceRate = '9000-12000';
        result.value = serviceRate;
        break;
      default:
         break;  
    }

    switch(fiftyTxn.value) {      
      case 'consulting-business1':
        serviceRate = 1500;
        result.value = serviceRate;  
        break;
      case 'holdings-company1':
        serviceRate = 1700; 
        result.value = serviceRate; 
        break;
      default:
        break;   
    }    
    switch(oneFiftyTxn.value) {
      case 'consulting-business2':
        serviceRate = 1800;
        result.value = serviceRate; 
        break;
      case 'holdings-company2':
        serviceRate = 2000;
        result.value = serviceRate; 
        break;
      case 'trading-retail2':
        serviceRate = 2500;
        result.value = serviceRate;  
        break;
      case 'mortgage-incurance-broker2':
        serviceRate = 1800;
        result.value = serviceRate; 
        break;
      case 'home-renovation-contractor2':
        serviceRate = 2300;
        result.value = serviceRate; 
        break;
      case 'medical-professional-corporation2':
        serviceRate = 2500;
        result.value = serviceRate;
        break;
      default:
        break;  
    }  
    switch(oneFiftyPlusTxn.value) {
      case 'consulting-business3':
        serviceRate = 2500;
        result.value = serviceRate; 
        break;
      case 'holdings-company3':
        serviceRate = 2700;
        result.value = serviceRate; 
        break;
      case 'trading-retail3':
        serviceRate = 3200; 
        result.value = serviceRate; 
        break;
      case 'manufacturing3':
        serviceRate = 3500;
        result.value = serviceRate; 
        break;
      case 'restaurant3':
        serviceRate = 3500;
        result.value = serviceRate; 
        break;  
      case 'mortgage-incurance-broker3':        
        serviceRate = 2500;
        result.value = serviceRate; 
        break;
      case 'home-renovation-contractor3':
        serviceRate = 3000;
        result.value = serviceRate; 
        break;
      case 'medical-professional-corporation3':
        serviceRate = 3500;
        result.value = serviceRate;
        break;
      default:
        break;    
    } 
    
    console.log('fiftyTxn value calculate end',fiftyTxn.value);
    console.log('oneFiftyTxn value calculate end',oneFiftyTxn.value);
    console.log('oneFiftyPlusTxn value calculate end',oneFiftyPlusTxn.value); 
    console.log ('serviceRate calculate end',serviceRate);
  }  
  
// function calculate2() {
//   const business = document.getElementById('business-service').value;
//   const ownership = document.getElementById('ownership-service').value;
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

// close button
window.onload = function(){
  document.getElementById('button-close').onclick = function(){
      this.parentNode.parentNode
      .removeChild(this.parentNode);
      return false;
  };
};
  



