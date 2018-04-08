'use strict'

function main(){

  const errorMessageElement = document.getElementById('empty-cart');
  const addToCartButtonElements = document.querySelectorAll('#add-btn');
  const shoppingCartElement = document.querySelector('.final-card'); 

  function createFinalPriceElements(calculatedFinalPriceElement) {
    const finalPriceContainerElement = document.createElement('div');
    const removeButtonElement = document.createElement('button');
    const totalPriceElement = document.createElement('p');

    finalPriceContainerElement.classList.add('final-price');
    removeButtonElement.innerText = 'X';
    removeButtonElement.setAttribute('id', 'remove-btn');
    totalPriceElement.innerText = calculatedFinalPriceElement;

    finalPriceContainerElement.appendChild(removeButtonElement);
    finalPriceContainerElement.appendChild(totalPriceElement);
    shoppingCartElement.appendChild(finalPriceContainerElement);
  }

  function handleAddToCart(e){
    const quantityInputValue = (e.currentTarget.parentNode.parentNode.firstChild.lastChild.lastChild.firstChild.value);
    
    if(quantityInputValue != 0){
      errorMessageElement.style = 'display: none';
      const calculatedFinalPriceElement = (e.currentTarget.parentNode.firstChild.lastChild.innerText) * quantityInputValue;
      const productInfo = (e.currentTarget.parentNode.parentNode.childNodes[0]);
      const cloneProductInfo = productInfo.cloneNode(true);

      shoppingCartElement.appendChild(cloneProductInfo);

      createFinalPriceElements(calculatedFinalPriceElement);
      console.log(e.currentTarget.parentNode.parentNode.firstChild.lastChild.lastChild.firstChild.value);
    }
    if(quantityInputValue == 0){
      alert('The product quantity must be more than 0');
    }
  }

  for (let i = 0; i < addToCartButtonElements.length; i++){
    addToCartButtonElements[i].addEventListener('click', handleAddToCart);
  }
}

document.addEventListener('DOMContentLoaded', main);
