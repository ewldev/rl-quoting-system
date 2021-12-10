// const form = document.getElementById('form');
// const messageContainer = document.querySelector('.message-container');
// const message = document.getElementById('message');
// let isValid = false;
const divs = document.getElementById('form').getElementsByTagName('div');
// const result = document.getElementById('result');

const fiftyTxn = document.getElementById('50txn-select');
    // const fiftyTxn1 = document.getElementById('50txn-select');
    
    const oneFiftyTxn = document.getElementById('150txn-select');  
    const oneFiftyPlusTxn = document.getElementById('150+txn-select'); 

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
}

function showHide2(elem2) {
  if(elem2.selectedIndex != 0) {
    for(let i=1; i < divs.length; i++) {
        divs[i].style.display = 'none';
        
    }
    document.getElementById('div'+elem2.value).style.display = 'flex';
  }
}

function showHide3(elem3) {
  if(elem3.selectedIndex != 0) {
    for(let i=2; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }    
    document.getElementById('div'+elem3.value).style.display = 'flex';
  }
  resetValues();
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
  form.addEventListener('submit', calculate); 
  //form.addEventListener('submit', reset);

  
  
  

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
    
   
    // console.log('fiftyTxn1.length',fiftyTxn1.options.length);
    console.log('fiftyTxn value calculate start',fiftyTxn.value);
    console.log('oneFiftyTxn value calculate start',oneFiftyTxn.value);
    console.log('oneFiftyPlusTxn value calculate start',oneFiftyPlusTxn.value); 
    console.log ('serviceRate calculate start',serviceRate);
    
    // for (let i=0; i<fiftyTxn1.length; i++) {
    //   fiftyTxn1.remove(i)
    // }
    // console.log('fiftyTxn1',fiftyTxn1);
    // console.log('fiftyTxn1.length',fiftyTxn1.options.length);
            
    switch(fiftyTxn.value) {      
      // case '':
      // serviceRate1 = '1500-1800';
      // result.value = serviceRate1;  
      //   break;
     
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
    
    
    
    // console.log('serviceRate',serviceRate);
    // console.log(businessRate);
    // console.log(ownership);
    // console.log(ownershipRate);  
    

// function calculate2() {
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
  



