'use strict'

function main(){

  const errorMessageElement = document.getElementById('empty-cart');
  const addToCartButtonElements = document.querySelectorAll('#add-btn');
  const shoppingCartElement = document.querySelector('.final-products');
  let finalProductCardElement;
  let removeButtonElement;
  let removeButtons;
  let productInfo
  let cloneProductInfo;
  
  function createFinalPriceElements(finalPrice) {
    finalProductCardElement = document.createElement('div');
    removeButtonElement = document.createElement('button');
    const finalPriceContainerElement = document.createElement('div');
    const totalPriceElement = document.createElement('p');
    
    finalPriceContainerElement.classList.add('final-price');
    finalProductCardElement.setAttribute('class', 'final-card');
    removeButtonElement.innerText = 'X';
    removeButtonElement.setAttribute('id', 'remove-btn');
    totalPriceElement.innerText = finalPrice;
    
    shoppingCartElement.appendChild(finalProductCardElement);
    finalProductCardElement.appendChild(cloneProductInfo);
    finalPriceContainerElement.appendChild(removeButtonElement);
    finalPriceContainerElement.appendChild(totalPriceElement);
    finalProductCardElement.appendChild(finalPriceContainerElement);
    removeButtons = document.querySelectorAll('#remove-btn');
    for (let i = 0; i < removeButtons.length; i++) {
      removeButtons[i].addEventListener('click', handleRemoveItem);
    }
  }
  
  function handleRemoveItem(e){
    e.currentTarget.parentNode.parentNode.remove();
  }

  function handleAddToCart(e){
    const quantityInputValue = (e.currentTarget.parentNode.parentNode.firstChild.lastChild.lastChild.firstChild.value);
    if(quantityInputValue != 0){
      errorMessageElement.style = 'display: none';
      
      const calculatedFinalPriceElement = (e.currentTarget.parentNode.firstChild.lastChild.innerText) * quantityInputValue;
      productInfo = (e.currentTarget.parentNode.parentNode.childNodes[0]);
      cloneProductInfo = productInfo.cloneNode(true);
      
      createFinalPriceElements(calculatedFinalPriceElement);
    }
    else if(quantityInputValue == 0){
      alert('The product quantity must be more than 0');
    }
  } 

  function addEventHandler(){
    for (let i = 0; i < addToCartButtonElements.length; i++){
      addToCartButtonElements[i].addEventListener('click', handleAddToCart);
    }
  }
  addEventHandler();
}
document.addEventListener('DOMContentLoaded', main)
