var toggleButton = document.querySelector('input[type=checkbox]')
var monthlyPrice = document.querySelectorAll('.pricing-card_price:first-of-type')
var annualPrice = document.querySelectorAll('.pricing-card_price:nth-of-type(2)')

if(toggleButton.checked == true){
  monthlyPrice.forEach( x => {
    x.style.display = 'flex';
  });
  annualPrice.forEach( x => {
    x.style.display = 'none';
  });
  
}
else{
  monthlyPrice.forEach( x => {
    x.style.display = 'none';
  });
  annualPrice.forEach( x => {
    x.style.display = 'flex';
  });
}

toggleButton.addEventListener('click',() => {
  if(toggleButton.checked == true){
    monthlyPrice.forEach( x => {
      x.style.display = 'flex';
    });
    annualPrice.forEach( x => {
      x.style.display = 'none';
    });
    
  }
  else{
    monthlyPrice.forEach( x => {
      x.style.display = 'none';
    });
    annualPrice.forEach( x => {
      x.style.display = 'flex';
    });
  }
})