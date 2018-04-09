'use strict'

function main(){

  const errorMessageElement = document.getElementById('empty-cart');
  const addToCartButtonElements = document.querySelectorAll('#add-btn');
  const shoppingCartElement = document.querySelector('.final-products');
  const checkoutPrice = document.getElementById('total');
  let priceArray = [];
  let finalProductCardElement;
  let removeButtonElement;
  let removeButtons;
  let productInfo
  let cloneProductInfo;
  let totalPriceElement;

  function createFinalPriceElements(finalPrice) {
    finalProductCardElement = document.createElement('div');
    removeButtonElement = document.createElement('button');
    totalPriceElement = document.createElement('p');
    const finalPriceContainerElement = document.createElement('div');
    
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
    remTotalPrice();
  }

  function handleAddToCart(e){
    const quantityInputValue = (e.currentTarget.parentNode.parentNode.firstChild.lastChild.lastChild.firstChild.value);
    if(quantityInputValue != 0){
      errorMessageElement.style = 'display: none';
      
      const calculatedFinalPriceElement = (e.currentTarget.parentNode.firstChild.lastChild.innerText) * quantityInputValue;
      productInfo = (e.currentTarget.parentNode.parentNode.childNodes[0]);
      cloneProductInfo = productInfo.cloneNode(true);
      
      createFinalPriceElements(calculatedFinalPriceElement);
      sumTotalPrice();
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

  function sumTotalPrice(){
    priceArray.push(parseFloat(totalPriceElement.innerText));
    let sumPrice = priceArray.reduce(function (a, b){
      return a + b;
    }, 0)
    checkoutPrice.innerText = sumPrice;
  }

  function remTotalPrice(){
    priceArray.pop(parseFloat(totalPriceElement.innerText));
    let remPrice = priceArray.reduce(function(a, b){
      return a - b;
    }, 0);
    checkoutPrice.innerText = remPrice * -1;
  }
  addEventHandler();
}
document.addEventListener('DOMContentLoaded', main)
