'use strict'

function main(data){

    const productListMainElement = document.getElementById('products-list');

    function createCardElement (data, i){
        const productCardElement = document.createElement('div');
        productCardElement.classList.add('product-card');
        productListMainElement.appendChild(productCardElement);
        createCardLeftElements(data, i, productCardElement);
        createCardRightElements(data, i, productCardElement);
    }

    function createCardLeftElements (data, i, productCardElement){
        const cardLeftElement = document.createElement('div');
        const productImageElement = document.createElement('img');
        const productInfoElement = document.createElement('div');
        const InfoDivElement = document.createElement('div');
        const productNameElement = document.createElement('h2');
        const productColorElement = document.createElement('p');
        const productInputElement = document.createElement('div');
        const productQuantityElement = document.createElement('input');
        productImageElement.src = products[i].image;
        productNameElement.innerText = products[i].name;
        productColorElement.innerText = products[i].color;
        productQuantityElement.type = 'number';
        productQuantityElement.value = '0';
        cardLeftElement.classList.add('card-left');
        productInfoElement.classList.add('card-info');
        cardLeftElement.appendChild(productImageElement);
        cardLeftElement.appendChild(productInfoElement);
        InfoDivElement.appendChild(productNameElement);
        InfoDivElement.appendChild(productColorElement);
        productInfoElement.appendChild(InfoDivElement);
        productInfoElement.appendChild(productInputElement);
        productInputElement.appendChild(productQuantityElement);
        productCardElement.appendChild(cardLeftElement);
    }

    function createCardRightElements (data, i, productCardElement){
        const cardRightElement = document.createElement('div');
        const productPriceElement = document.createElement('p');
        const productPriceValueElement = document.createElement('span');
        const productButtonElement = document.createElement('button');
        cardRightElement.classList.add('card-right');
        productPriceElement.innerText = '$';
        productPriceValueElement.innerText = products[i].price;
        productButtonElement.setAttribute('id', 'add-btn');
        productButtonElement.innerText = 'Add to cart';
        cardRightElement.appendChild(productPriceElement);
        cardRightElement.appendChild(productButtonElement);
        productPriceElement.appendChild(productPriceValueElement);
        productCardElement.appendChild(cardRightElement);
    }

    function displayProducts(data) {
        for (let i = 0; i < products.length; i++) {
            createCardElement(data, i);
        }
    }

    displayProducts(data);
    
}

document.addEventListener('DOMContentLoaded', main(products));