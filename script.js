// script.js
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}



// Array to store cart items
let cart = [];

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    // Create a product object
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };
    
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        // If the product is already in the cart, increase the quantity
        existingProduct.quantity += 1;
    } else {
        // If the product is not in the cart, add it to the cart
        cart.push(product);
    }

    // Update the cart display (this is where you can update the UI)
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    // For simplicity, log the cart to the console
    console.log(cart);

    // You can update a cart icon, show a modal, or redirect to a cart page here
    // Example: document.getElementById('cart-count').innerText = cart.length;
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.products-container .box .content a').forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        // Get the product name and price from the corresponding product card
        const productName = button.parentElement.previousElementSibling.innerText;
        const productPrice = button.previousElementSibling.innerText;

        // Add the product to the cart
        addToCart(productName, productPrice);
    });
});

