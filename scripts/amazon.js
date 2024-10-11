import {cart} from '../data/cart.js'

const products = [
    {
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
        price: 1090,
        rating: {
            number: 87,
            stars: 4.5
        }
    },
    {
        image: "images/products/intermediate-composite-basketball.jpg",
        name: 'Intermediate Size Basketball',
        price: 2095,
        rating: {
            number: 127,
            stars: 4
        }
    },
    {
        image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name: 'Adults Plain Cotton T-Shirt - 2 Pack',
        price: 799,
        rating: {
            number: 56,
            stars: 4
        }
    }
];

let final_html = ``;
products.forEach((product) => {
    const html = `
    <div class="product-container">
        <div class="product-image-container">
            <img class="product-image" src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png" alt="Rating: ${product.rating.stars} stars">
            <div class="product-rating-count link-primary">
                ${product.rating.number}
            </div>
        </div>

        <div class="product-price">
            $${(product.price / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
            <img src="images/icons/checkmark.png" alt="Added to cart">
            Added
        </div>

        <button class="add-to-cart-button button-primary" data-name="${product.name}">
            Add to Cart
        </button>
    </div>
    `;
    final_html += html;
});

document.querySelector('.js-product-grid').innerHTML = final_html;

document.querySelectorAll('.add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
        const Product_Name = button.dataset.name;
        let productExists = false; // Flag to check if the product already exists in the cart

        cart.forEach((item) => {
            if (item.name === Product_Name) {
                item.quantity += 1; // If product exists, increase quantity
                productExists = true; // Mark as found
            }
        });

        if (!productExists) {
            // If the product doesn't exist in the cart, add it
            cart.push({
                name: Product_Name,
                quantity: 1
            });
        }

        let cart_quantity=0
        cart.forEach((item)=>{
            cart_quantity+=item.quantity
            document.querySelector('.cart-quantity').innerHTML=cart_quantity
        })

        console.log(cart);
        console.log(cart_quantity) // Output the cart
    });
});


