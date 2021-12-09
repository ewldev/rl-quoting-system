const form = document.getElementById('form');
// const messageContainer = document.querySelector('.message-container');
// const message = document.getElementById('message');
// let isValid = false;
const divs = document.getElementById('form').getElementsByTagName('div');
const result = document.getElementById('result');

function showHide1(elem1) {
  //get the divs to show/hide  
  console.log('elem1.selectedIndex', elem1.selectedIndex);  
  if(elem1.selectedIndex != 0) {
      //  hide unrelated divs
       for(let i=0; i < divs.length; i++) {
          divs[i].style.display = 'none';          
      }
      //unhide the selected div
      document.getElementById('div'+elem1.value).style.display = 'flex';
      console.log('elem1.value', elem1.value)
  }
}

function showHide2(elem2) {
  console.log('elem2.selectedIndex', elem2.selectedIndex);
  if(elem2.selectedIndex != 0) {
    for(let i=1; i < divs.length; i++) {
        divs[i].style.display = 'none';
        
    }
    document.getElementById('div'+elem2.value).style.display = 'flex';
    console.log('elem.value', elem2.value)
  }
}

function showHide3(elem3) {
  console.log('elem3.selectedIndex', elem3.selectedIndex);
  console.log('this',this);
  if(elem3.selectedIndex != 0) {
    for(let i=2; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }    
    document.getElementById('div'+elem3.value).style.display = 'flex';
    console.log('elem3.value', elem3.value);
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
    let serviceRate = 0;
    
    console.log('result.value', result.value);
    console.log ('serviceRate',serviceRate);
    console.log ('serviceRate',serviceRate);
    console.log ('serviceRate',serviceRate);

    switch(fiftyTxn) {      
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
    }
    switch(oneFiftyTxn) {
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
        result.value = serviceRate  
    }  
    switch(oneFiftyPlusTxn) {
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
        result.value = serviceRate  
    } 
    console.log('result.value', result.value); 
    console.log ('serviceRate',serviceRate);
    console.log ('serviceRate',serviceRate);
    console.log ('serviceRate',serviceRate);
  }  
    
    
    
    // console.log('serviceRate',serviceRate);
    // console.log(businessRate);
    // console.log(ownership);
    // console.log(ownershipRate);  
    

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
  



