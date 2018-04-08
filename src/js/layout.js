'use strict'

function main(data){

    const productListMainElement = document.getElementById('products-list');


    function createProductCard(data){
        for(let i = 0; i < products.length; i++){

            const productCardElement = document.createElement('div');
            const cardLeftElement = document.createElement('div');
            const cardRightElement = document.createElement('div');
            // --- Card Left Element --- //
            const productImageElement = document.createElement('img');
            const productInfoElement = document.createElement('div');
            const InfoDivElement = document.createElement('div');
            const productNameElement = document.createElement('h2');
            const productColorElement = document.createElement('p');
            const productInputElement = document.createElement('div');
            const productQuantityElement = document.createElement('input');
            // --- Card Right Element --- //
            const productPriceElement = document.createElement('p');
            const productPriceValueElement = document.createElement('span');
            const productButtonElement = document.createElement('button');

            cardLeftElement.className = 'card-left';
            cardRightElement.className = 'card-right';
            productCardElement.className = 'product-card';
            productInfoElement.className = 'card-info';

            //  --- Card Left Element --- //
            productImageElement.src = products[i].image;
            productNameElement.innerText = products[i].name;
            productColorElement.innerText = products[i].color;
            productQuantityElement.type = 'number';
            productQuantityElement.value = '0';
            //  --- Card Right Element --- //
            productPriceElement.innerText = '$';
            productPriceValueElement.innerText = products[i].price;
            productButtonElement.innerText = 'Add to cart';

            productListMainElement.appendChild(productCardElement);
            productCardElement.appendChild(cardLeftElement);
            productCardElement.appendChild(cardRightElement);
            // --- Card Left Element --- //
            cardLeftElement.appendChild(productImageElement);
            cardLeftElement.appendChild(productInfoElement);
            InfoDivElement.appendChild(productNameElement);
            InfoDivElement.appendChild(productColorElement);
            productInfoElement.appendChild(InfoDivElement);
            productInfoElement.appendChild(productInputElement);
            productInputElement.appendChild(productQuantityElement);
            // -- Card Right Element --- /
            cardRightElement.appendChild(productPriceElement);
            cardRightElement.appendChild(productButtonElement);
            productPriceElement.appendChild(productPriceValueElement);


            
        }
    }

    createProductCard(data);
}

document.addEventListener('DOMContentLoad', main(products));