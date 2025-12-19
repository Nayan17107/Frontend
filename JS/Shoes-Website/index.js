// Sample product data
const products = [
    {
        id: 1,
        name: "Nike Air Max 270",
        price: 149.99,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7992669b-d580-458f-87b9-1b7e3497800e/W+AIR+MAX+270.png",
        category: "Running",
        description: "Premium running shoes with Air cushioning technology for maximum."
    },
    {
        id: 2,
        name: "Adidas Ultraboost 22",
        price: 179.99,
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500",
        category: "Running",
        description: "Responsive running shoes with Boost technology for energy return and comfort."
    },
    {
        id: 3,
        name: "New Balance 574",
        price: 89.99,
        image: "https://imgs.search.brave.com/eVo8tVLgXQWttb9_lhiCQ1Bf2h_qdjL2i5CbPS7cym0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vRHc0eGM3/Ny1aYmdKWF80TkEy/dzVYQ25YTlMxNnlH/dFNRcHdNRXVQTEtQ/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldjeS9MbUZ1Y3kx/dFpXUnBZUzVqL2Iy/MHZhUzgwTnpSNE56/RTMvTDFOVE1qUXRU/MEpWTUVWRS9MVGt3/V0Y5R01TNXFjR2Nf/L2RqMHhOekE1TnpF/d09EVXo",
        category: "Casual",
        description: "Classic casual sneakers with premium suede and mesh upper for everyday style."
    },
    {
        id: 4,
        name: "Puma RS-X",
        price: 109.99,
        image: "https://imgs.search.brave.com/FHwGB4A00gWP9u59FZl3o-sdIuVyPbleLr4YCcnkKU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vU1ZVRjJH/cHY4WVkyS0diWE56/M1h5cUN6T1BWODBt/UE9lZkxkUkpOM2Nr/Zy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldGbi9aWE11Y0hW/dFlTNWpiMjB2L2FX/MWhaMlV2ZFhCc2Iy/RmsvTDJaZllYVjBi/eXh4WDJGMS9kRzhz/WWw5eVoySTZabUZt/L1lXWmhMSGRmTmpB/d0xHaGYvTmpBd0wy/ZHNiMkpoYkM4ei9O/elEyTmprdk1ERXZj/M1l3L015OW1ibVF2/VUU1QkwyWnQvZEM5/d2JtY3ZVbE10V0Mx/Ti9iMjV2TFUxbGRH/RnNMVmR2L2JXVnVK/M010VTI1bFlXdGwv/Y25N",
        category: "Sports",
        description: "Retro-inspired sports shoes with modern comfort and bold design."
    },
    {
        id: 5,
        name: "Allen Edmonds Oxford",
        price: 299.99,
        image: "https://imgs.search.brave.com/rKyL9KD3TGrEZqHMvONRJ888DzA3igxHf1103DdTtWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vQ3R5NUxt/U1RLZlY4QzFhSlda/OTlqSzRSbFpCaVlI/TE1BbWU3aVc5elAw/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9aMlZ1ZEd4/bGJXRnVjMmRoL2Vt/VjBkR1V1WTI5dEwz/ZHcvTFdOdmJuUmxi/blF2ZFhCcy9iMkZr/Y3k4eU1ESXdMekF5/L0wwRnNiR1Z1TFVW/a2JXOXUvWkhNdFVH/RnlheTFCZG1WdS9k/V1V0VDNobWIzSmtj/eTFKL2JpMUNiR0Zq/YXkweE1ETXcvZURV/M09TNXFjR2M",
        category: "Formal",
        description: "Premium leather formal shoes with Goodyear welt construction for durability."
    },
    {
        id: 6,
        name: "Vans Old Skool",
        price: 69.99,
        image: "https://imgs.search.brave.com/miTdDJA3kb3e15jRGMdYmLjvhF59ejOLHdyIZ54Hbjo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vMjdwV0Q4/U2FQZ1I2UXExejla/ek9GWERSRnpjazlY/RHBoaGd6dUtfQkhu/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/TG0xbC9aR2xoTFdG/dFlYcHZiaTVqL2Iy/MHZhVzFoWjJWekww/a3YvTkRGcWJVOVNR/WEZtVVV3dS9hbkJu",
        category: "Casual",
        description: "Iconic skate shoes with classic design and durable canvas construction."
    },
    {
        id: 7,
        name: "Asics Gel-Nimbus 24",
        price: 159.99,
        image: "https://imgs.search.brave.com/6Qd4wmYXWYBADVaoy0BtaVuNOE4t9Km7v9alFUEagKs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vNDE0MnNQ/NkU0aVllaWVlZ3Vn/czVyZkxFajVYMllB/QnBISWFfTlBrYkRM/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9abWwwTW5K/MWJpNWpiMjB2L1ky/UnVMM05vYjNBdlpt/bHMvWlhNdk1UQXhN/a0l5TURGZi9NREF6/WDFOU1gxSlVYMGRN/L1FsOVFUa2RmTVRJ/NE1IZ3gvTWpnd0xW/Qk9SeTV3Ym1jXy9k/ajB4TnpJeE5qWXpN/ekUxL0puZHBaSFJv/UFRFeU1EQQ",
        category: "Running",
        description: "Long-distance running shoes with superior cushioning and stability."
    },
    {
        id: 8,
        name: "Cole Haan Zerogrand",
        price: 199.99,
        image: "https://imgs.search.brave.com/k6OFw_JTXg0i0iA6Q0b8Zm1bXdlFJtzbcUp-vj-Wzgo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vU1hTZjBm/WGVzSzBJTy13OVVD/TC1CSHZJSE1xWktH/cXluS0Y1bUppMnJR/TS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/TG0xbC9aR2xoTFdG/dFlYcHZiaTVqL2Iy/MHZhVzFoWjJWekww/a3YvTnpGWU5FdGtk/VXBzU1V3dS9hbkJu",
        category: "Formal",
        description: "Business casual shoes with athletic comfort and modern design."
    }
];

// Shopping cart functionality
let cart = [];
let cartTotal = 0;

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartIcon = document.querySelector('.cart-icon');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCart = document.querySelector('.close-cart');
const cartItems = document.querySelector('.cart-items');
const cartTotalAmount = document.getElementById('cart-total-amount');
const cartCount = document.querySelector('.cart-count');
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

// Initialize the website
function init() {
    displayProducts(products);
    setupEventListeners();
    loadCartFromLocalStorage(); // Load cart data if exists
}

// Display products in the grid
function displayProducts(productsToShow) {
    productGrid.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-category">${product.category}</p>
            <p class="product-description">${product.description}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Cart toggle
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (cartSidebar.classList.contains('active') && 
            !cartSidebar.contains(e.target) && 
            !cartIcon.contains(e.target)) {
            toggleCart();
        }
    });

    // Add to cart functionality
    productGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
            // Show cart after adding item
            cartSidebar.classList.add('active');
        }
    });

    // Search functionality
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Category filtering
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.querySelector('h3').textContent;
            filterByCategory(category);
        });
    });

    // Prevent cart sidebar from closing when clicking inside it
    cartSidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Toggle cart visibility
function toggleCart() {
    cartSidebar.classList.toggle('active');
    // Add overlay when cart is open
    if (cartSidebar.classList.contains('active')) {
        addOverlay();
    } else {
        removeOverlay();
    }
}

// Add overlay when cart is open
function addOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'cart-overlay';
    document.body.appendChild(overlay);
    // Prevent body scrolling when cart is open
    document.body.style.overflow = 'hidden';
}

// Remove overlay when cart is closed
function removeOverlay() {
    const overlay = document.querySelector('.cart-overlay');
    if (overlay) {
        overlay.remove();
    }
    // Enable body scrolling
    document.body.style.overflow = '';
}

// Filter products by category
function filterByCategory(category) {
    const filteredProducts = products.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
    );
    displayProducts(filteredProducts);
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    saveCartToLocalStorage(); // Save cart data
    showAddedToCartMessage(product.name); // Show confirmation message
}

// Show "Added to Cart" message
function showAddedToCartMessage(productName) {
    const message = document.createElement('div');
    message.className = 'cart-message';
    message.innerHTML = `
        <div class="cart-message-content">
            <i class="fas fa-check-circle"></i>
            <p>${productName} added to cart</p>
        </div>
    `;
    document.body.appendChild(message);

    // Remove message after 2 seconds
    setTimeout(() => {
        message.remove();
    }, 2000);
}

// Update cart display
function updateCart() {
    cartItems.innerHTML = '';
    cartTotal = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            cartTotal += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    cartTotalAmount.textContent = cartTotal.toFixed(2);
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    // Add remove functionality
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.remove-item').dataset.id);
            removeFromCart(productId);
        });
    });
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (!searchTerm) {
        displayProducts(products);
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    displayProducts(filteredProducts);
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Initialize the website when the DOM is loaded
document.addEventListener('DOMContentLoaded', init); 