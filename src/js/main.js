'use strict'

function main(){

  const errorMessageElement = document.getElementById('empty-cart');
  const addToCartButtonElement = document.getElementById('add-btn' + [i]);
  
  function handleAddToCart(){
    errorMessageElement.style = 'display: none';
    

  }

  addToCartButtonElement.addEventListener('click', handleAddToCart);

}

document.addEventListener('DOMContentLoaded', main);
