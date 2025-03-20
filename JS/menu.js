// Menu Items Data Structure
const menuItems = [
 {
      
         category: 'pizza',
         name: 'Tomato Pizza',
         description: 'Classic tomato base pizza',
         price: '₹130',
         image: './IMAGE/tomato-pizza.jpg' // Updated image path'
     }, {
         category: 'pizza',
         name: 'Onion Pizza',
         description: 'Fresh onion toppings',
         price: '₹130',
         image: './IMAGE/onion-pizza.jpeg'
     }, {
         category: 'pizza',
         name: 'Capsicum Pizza',
         description: 'Fresh capsicum toppings',
         price: '₹130',
         image: './IMAGE/capsicum-pizza.jpg'
     }, {
         category: 'pizza',
         name: 'Mix Veg Pizza',
         description: 'Assorted vegetables',
         price: '₹150',
         image: './IMAGE/mix-pizza.jpg'
     }, {
         category: 'pizza',
         name: 'Farm House Pizza',
         description: 'Fresh farm vegetables',
         price: '₹230',
         image: './IMAGE/fam-house-pizza.jpeg'
     }, {
         category: 'pizza',
         name: 'Cheese Burst Pizza',
         description: 'Extra cheese filled crust',
         price: '₹240',
         image: './IMAGE/cheese-burst-pizza.jpeg'
     }, {
         category: 'pizza',
         name: 'Corn Pizza',
         description: 'Extra Corn cheese filled crust',
         price: '₹140',
         image: './IMAGE/corn-pizza.jpeg'
     }, {
         category: 'pizza',
         name: 'Spicy Pizza',
         description: 'Extra Spicy and cheese filled crust',
         price: '₹160',
         image: './IMAGE/spicy-pizza.jpeg'
     }, {
         category: 'pizza',
         name: 'Deluxe Pizza',
         description: 'Deluxe Class one',
         price: '₹170',
         image: './IMAGE/deluxe-pizza.jpeg'
     }, {
         category: 'pizza',
         name: 'Paneer Corma Pizza',
         description: 'Paneer and cheese filled crust',
         price: '₹180',
         image: './IMAGE/panner-corma-pizza.jpg'
     }, {
         category: 'pizza',
         name: 'Town Special Pizza',
         description: 'Our Special',
         price: '₹250',
         image: './IMAGE/town special pizza.jpg'
     },
     // THIS IS BURGER ITEM SECTION
     {
         category: 'burgers',
         name: 'Veg Crunch Burger',
         description: 'Beef patty, cheddar cheese, lettuce, tomato',
         price: '₹40',
         image: './IMAGE/veg-crunch.jpeg'
     }, {
         category: 'burgers',
         name: 'Veg-Spicy Burger',
         description: 'Grilled chicken, mayo, lettuce, tomato',
         price: '₹50',
         image: './IMAGE/spicy-burger.jpeg'
     }, {
         category: 'burgers',
         name: 'Veg-Italian Burger',
         description: 'Grilled Tikki, mayo, lettuce, tomato',
         price: '₹70',
         image: './IMAGE/veg-italian-burger.jpeg'
     }, {
         category: 'burgers',
         name: 'Maharaja-Burger',
         description: 'Grilled Tikki, mayo, lettuce, tomato',
         price: '₹120',
         image: '../IMAGE/'
     }, {
         category: 'burgers',
         name: 'Veg-Classic Burger',
         description: 'Grilled Tikki, mayo, lettuce, tomato',
         price: '₹60',
         image: './IMAGE/classic-burger.jpeg'
     }, {
         category: 'burgers',
         name: 'Veg-paneer-Burger',
         description: 'Grilled Tikki, mayo, lettuce, paneer,tomato',
         price: '₹80',
         image: './IMAGE/veg-paneer-burger.jpeg'
     },
     // THIS IS PASTA-ITEM SECTION
     {
         category: 'pasta',
         name: 'Red Sauce Spicy Pasta',
         description: 'Red sauce, tomato sauce, parmesan',
         price: 'H-₹70',
         image: './IMAGE/red-sauce-pasta.jpeg'
     },
     {
        category: 'pasta',
        name: 'Red Sauce Spicy Pasta',
        description: 'Red sauce, tomato sauce, parmesan',
        price: 'F-₹130',
        image: './IMAGE/red-sauce-pasta.jpeg'
     } ,{
         category: 'pasta',
         name: 'White Sauce Pasta',
         description: 'White sauce, cream, parmesan',
         price: 'H-₹70',
         image: './IMAGE/white-sauce-pasta.jpeg'
     }, 
     {
        category: 'pasta',
        name: 'White Sauce Pasta',
        description: 'White sauce, cream, parmesan',
        price: 'F-₹130',
        image: './IMAGE/white-sauce-pasta.jpeg'
     },
    {
         category: 'pasta',
         name: 'Tandoori Pasta',
         description: 'Tandoori sauce, cream, parmesan',
         price: 'H-₹80',
    
         image: './IMAGE/tandoori-pasta.jpeg'
     },
      {
         category: 'pasta',
         name: 'Tandoori Pasta',
         description: 'Tandoori sauce, cream, parmesan',
         price: 'F-₹150',
    
         image: './IMAGE/tandoori-pasta.jpeg'
     },
    
      {
         category: 'pasta',
         name: 'Mix Sauce Pasta',
         description: 'Mix sauce, cream, parmesan',
         price: 'H-₹100',
    
         image: './IMAGE/mix-sauce-pasta.jpeg'
     },
      {
         category: 'pasta',
         name: 'Mix Sauce Pasta',
         description: 'Mix sauce, cream, parmesan',
         price: 'F-₹180',
    
         image: './IMAGE/mix-sauce-pasta.jpeg'
     },
     // THIS IS BEVERAGES ITEM SECTION
    
     {
        category: 'beverages',
        name: 'Cold Drink',
        description: 'All soft drink & Cold drink',
        price: '₹40',
        options: [
            { name: 'Coca Cola', price: '₹40' },
            { name: 'Pepsi', price: '₹40' },
            { name: 'Sprite', price: '₹40' },
            { name: 'Fanta', price: '₹40' },
            { name: 'Thumbs Up', price: '₹40' },
            { name: 'Mountain Dew', price: '₹40' }
        ],
        image: './IMAGE/coldrink.jpeg'
    }, {
         category: 'beverages',
         name: 'Plain Chai',
         description: 'Tea',
         price: '₹10',
         image: './IMAGE/plain-chai.jpg'
     }, {
         category: 'beverages',
         name: 'Kullhad Chai',
         description: 'Kullhad Tea , Pure natural masalas',
         price: '₹20',
         image: './IMAGE/kullhad chai.webp'
     }, {
         category: 'beverages',
         name: 'Sp. Kullhad Chai',
         description: 'Sp. Kullhad Tea , Pure natural masalas',
         price: '₹30',
         image: './IMAGE/spcl-kullhad-chai - Copy.png'
     }, {
         category: 'beverages',
         name: 'Green Tea',
         description: 'Green Tea',
         price: '₹40',
         image: './IMAGE/green tea.jpeg'
     }, {
         category: 'beverages',
         name: 'Hot Coffee',
         description: ' Black hot coffee',
         price: '₹40',
         image: './IMAGE/black-coffee.webp'
     }, {
         category: 'beverages',
         name: 'Hot coffee',
         description: 'Regular hot coffee',
         price: '₹50',
         image: './IMAGE/hot-coffee - Copy.jpeg'
     }, {
         category: 'beverages',
         name: 'Cold Coffee',
         description: 'Creamy Cold coffee',
         price: '₹80',
         image: './IMAGE/cold coffee.jpeg'
     }, {
         category: 'beverages',
         name: 'Milk Shake',
         description: 'Chocolate,Butterscotch,Strawberry',
         price: '₹80',
         image: '../IMAGE/combo milk shkae.jpeg'
     }, {
         category: 'beverages',
         name: 'Milk Shake',
         description: 'Vaniila ',
         price: '₹60',
         image: './IMAGE/vanilla milk.jpeg'
     }, {
         category: 'beverages',
         name: 'Milk Shake',
         description: 'Oreo',
         price: '₹90',
         image: './IMAGE/oreo.jpeg'
     }, {
    
         category: 'beverages',
         name: 'Milk Shake',
         description: 'Kitkat',
         price: '₹100',
         image: './IMAGE/kitkat milk shake.jpeg'
     },
     // THIS IS SANDWICH ITEM SECTION
     {
         category: 'sandwich',
         name: 'Veg Club Grilled Sandwich',
         Description: 'Grilled and Crispy Sandwich',
         price: 'F-₹80',
         image: './IMAGE/club-sand.webp'
     }, {
         category: 'sandwich',
         name: ' Paneer Grilled Sandwich',
         Description: 'Cheese and Crispy Paneer Sandwich',
         price: 'H-60',
         image: './IMAGE/paneer-sand.webp'
     },
     {
        category: 'sandwich',
        name: ' Paneer Grilled Sandwich',
        Description: 'Cheese and Crispy Paneer Sandwich',
        price: 'F-₹110',
        image: './IMAGE/paneer-sand.webp'
     },
     {
         category: 'sandwich',
         name: 'Spicy Corn Sandwich',
         Description: 'corn and Crispy Sandwich',
         price: 'H-70',
         image: './IMAGE/corn-sand.jpg'
     },
     {
        category: 'sandwich',
        name: 'Spicy Corn Sandwich',
        Description: 'corn and Crispy Sandwich',
        price: 'F-₹130',
        image: './IMAGE/corn-sand.jpg'
     }, {
         category: 'sandwich',
         name: 'Butter Toast (4 <SUB>pcs</SUB>)',
         Description: 'Butter and Crispy Toast',
         price: ' F-₹40',
         image: './IMAGE/butter-toast.jpg'
     },
     // THIS IS SNACKS ITEM SECTION
     {
         category: 'snacks',
         name: 'French Fries-Regular',
         Description: 'Crispy french fries',
         price: '₹70',
         image: './IMAGE/regular-french.jpeg'
     }, {
         category: 'snacks',
         name: 'French Fries-Spicy',
         Description: 'Spicy french fries',
         price: '₹80',
         image: './IMAGE/spicy-r-french.jpeg'
     }, {
         category: 'snacks',
         name: 'French Fries-Large',
         Description: 'large size',
         price: '₹100',
         image: './IMAGE/regular-large-fries.jpeg'
     }, {
         category: 'snacks',
         name: 'French Fries-Loaded',
         Description: 'Loaded french fries',
         price: '₹140',
         image: './IMAGE/loaded-fries.jpeg'
     }, {
         category: 'snacks',
         name: 'French Fries-Spicy',
         Description: 'Extra Spicy french fries',
         price: '₹110',
         image: './IMAGE/spicy-r-fries-large.jpg'
     }, {
         category: 'snacks',
         name: 'Veg.Nuggets-6pcs.',
         Description: 'Potato Nuggets',
         price: '₹40',
         image: './IMAGE/nuggets.jpeg'
     }, {
         category: 'snacks',
         name: 'Veg.Nuggets-9pcs.',
         Description: 'Potato Nuggets',
         price: '₹60',
         image: './IMAGE/nuggets.jpeg'
     }, {
         category: 'snacks',
         name: 'Veg.Strip-6pcs',
         Description: 'Potato Strip',
         price: '₹60',
         image: './IMAGE/veg strip.jpeg'
     }, {
         category: 'snacks',
         name: 'Veg.Strip-9pcs',
         Description: 'Potato Strip',
         price: '₹60',
         image: './IMAGE/veg strip.jpeg'
     },
     //THIS IS MAGGIE SECTION
     {
         category: 'maggie',
         name: 'Veg-Maggie',
         Description: 'Pure and fresh vegetable Maggie',
         price: '₹60',
         image: './IMAGE/veg-maggie.jpeg',
     }, {
         category: 'maggie',
         name: 'Plain-Maggie',
         Description: 'Plain Masala Maggie',
         price: '₹50',
         image: './IMAGE/plain-maggie - Copy.webp',
     }, {
         category: 'maggie',
         name: 'Paneer-Maggie',
         Description: 'Rich with Paneer',
         price: '₹70',
         image: './IMAGE/paneer-maggie.avif',
     }, {
         category: 'maggie',
         name: 'Cheese-Maggie',
         Description: 'Loaded with cheese',
         price: '₹80',
         image: './IMAGE/cheese-maggie.jpeg',
     }, {
         category: 'maggie',
         name: 'Tandoori-Maggie',
         Description: 'Creamy filled with tandoori taste',
         price: '₹90',
         image: './IMAGE/tandoori-maggie.png',
     }, {
         category: 'maggie',
         name: 'Egg-Maggie',
         Description: 'Mixed With Egg',
         price: '₹100',
         image: './IMAGE/egg-maggie.jpeg'
     },
     //THIS IS WRAP ITEM SECTION
     {
         category: 'wrap',
         name: 'Spicy-Wrap',
         Description: 'Veggie And Sicy Wrap',
         price: '₹80',
         image: './IMAGE/spicy-wrap.jpeg'
     }, {
         category: 'wrap',
         name: 'veg-Wrap',
         Description: 'Veggie And Creamy Wrap',
         price: '₹100',
         image: './IMAGE/veg-wrap.jpg'
     }, {
         category: 'wrap',
         name: 'Paneer-Wrap',
         Description: 'Panner,Veggie And Creamy Wrap',
         price: '₹120',
         image: './IMAGE/paneer wrap.jpeg'
     },
     //THIS IS OMLATE SECTION
     {
         category: 'omelette',
         name: 'Plain-omelette',
         description: 'Plain Egg Omlate',
         price: '₹50',
         image: './IMAGE/plain-omlette.jpg',
    
    
     }, {
         category: 'omelette',
         name: 'Bread-omelette',
         description: ' Bread Omlate',
         price: '₹60',
         image: './IMAGE/bread-omlette.jpeg',
    
    
     }, {
         category: 'omelette',
         name: 'Cheese-omelette',
         description: ' Fully loaded with cheese Egg Omlate',
         price: '₹100',
         image: './IMAGE/cheese-omlette.jpeg',
    
    
     },
    
    ];
    
    
  // Add more menu items here
// Menu Items Array stays the same
// ...existing menuItems array...

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderMenuItems();
  initializeCategories();
  initializeCart();
});

// Render Menu Items
function renderMenuItems(category = 'all') {
  const menuGrid = document.querySelector('.menu-grid');
  menuGrid.innerHTML = '';

  menuItems.forEach(item => {
      if (category.toLowerCase() === 'all' || item.category === category.toLowerCase()) {
          const menuItem = `
              <div class="menu-item" data-category="${item.category}">
                  <img src="${item.image}" alt="${item.name}" class="menu-img">
                  <div class="menu-content">
                      <h3 class="menu-name">${item.name}</h3>
                      <p class="menu-desc">${item.description || item.Description}</p>
                      <div class="menu-price">${item.price}</div>
                      <div class="item-controls">
                          <button class="quantity-btn minus" disabled>-</button>
                          <span class="quantity">0</span>
                          <button class="quantity-btn plus">+</button>
                          <button class="add-to-cart-btn" disabled>
                              <i class="fas fa-cart-plus"></i> Add
                          </button>
                      </div>
                  </div>
              </div>
          `;
          menuGrid.innerHTML += menuItem;
      }
  });

  attachItemListeners();
}

// Initialize Category Buttons
function initializeCategories() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          categoryBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderMenuItems(btn.textContent);
      });
  });
}

// Attach Item Listeners
function attachItemListeners() {
  document.querySelectorAll('.menu-item').forEach(item => {
      const plusBtn = item.querySelector('.plus');
      const minusBtn = item.querySelector('.minus');
      const addBtn = item.querySelector('.add-to-cart-btn');
      
      plusBtn.addEventListener('click', () => updateQuantity(item, 1));
      minusBtn.addEventListener('click', () => updateQuantity(item, -1));
      addBtn.addEventListener('click', () => addToCart(item));
  });
}

// Update Item Quantity
function updateQuantity(item, change) {
  const quantitySpan = item.querySelector('.quantity');
  const minusBtn = item.querySelector('.minus');
  const addBtn = item.querySelector('.add-to-cart-btn');
  
  let quantity = parseInt(quantitySpan.textContent) + change;
  quantity = Math.max(0, quantity);
  
  quantitySpan.textContent = quantity;
  minusBtn.disabled = quantity === 0;
  addBtn.disabled = quantity === 0;
}
// Replace with your Discord webhook URL
const DISCORD_WEBHOOK_URL = 'https://discordapp.com/api/webhooks/1346036691713916991/0uYJvNfKKePZiVfyouW__Io19TP6dS3KnmZD3bhFSjxJN1GcWE6FyMs7t6cLcIuoJsd_';

// Cart state
let cart = [];
let total = 0;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems();
    initializeCategories();
    initializeCart();
});

// Render menu items
function renderMenuItems(category = 'all') {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) return;

    menuGrid.innerHTML = '';
    menuItems.forEach(item => {
        if (category === 'all' || item.category === category.toLowerCase()) {
            menuGrid.innerHTML += `
                <div class="menu-item" data-category="${item.category}">
                    <img src="${item.image}" alt="${item.name}" class="menu-img" loading="lazy">
                    <div class="menu-content">
                        <h3 class="menu-name">${item.name}</h3>
                        <p class="menu-desc">${item.description || item.Description}</p>
                        <div class="menu-price">${item.price}</div>
                        <div class="item-controls">
                            <button class="quantity-btn minus" disabled>-</button>
                            <span class="quantity">0</span>
                            <button class="quantity-btn plus">+</button>
                            <button class="add-to-cart-btn" disabled>
                                <i class="fas fa-cart-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    attachItemListeners();
}

// Initialize category filters
function initializeCategories() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenuItems(btn.dataset.category);
        });
    });
}

// Initialize cart functionality
function initializeCart() {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeBtn = cartModal.querySelector('.close-btn');
    const cancelBtn = cartModal.querySelector('.cancel-btn');
    const orderForm = document.getElementById('orderForm');

    cartBtn?.addEventListener('click', showCart);
    closeBtn?.addEventListener('click', hideCart);
    cancelBtn?.addEventListener('click', hideCart);
    orderForm?.addEventListener('submit', handleOrder);

    window.addEventListener('click', (e) => {
        if (e.target === cartModal) hideCart();
    });
}

// Attach item control listeners
function attachItemListeners() {
    document.querySelectorAll('.menu-item').forEach(item => {
        const plusBtn = item.querySelector('.plus');
        const minusBtn = item.querySelector('.minus');
        const addBtn = item.querySelector('.add-to-cart-btn');
        
        plusBtn?.addEventListener('click', () => updateQuantity(item, 1));
        minusBtn?.addEventListener('click', () => updateQuantity(item, -1));
        addBtn?.addEventListener('click', () => addToCart(item));
    });
}

// Update item quantity
function updateQuantity(item, change) {
    const quantitySpan = item.querySelector('.quantity');
    const minusBtn = item.querySelector('.minus');
    const addBtn = item.querySelector('.add-to-cart-btn');
    
    let quantity = parseInt(quantitySpan.textContent) + change;
    quantity = Math.max(0, quantity);
    
    quantitySpan.textContent = quantity;
    minusBtn.disabled = quantity === 0;
    addBtn.disabled = quantity === 0;
}

// Add item to cart
function addToCart(item) {
    const name = item.querySelector('.menu-name').textContent;
    const priceText = item.querySelector('.menu-price').textContent;
    const price = parseFloat(priceText.replace(/[^0-9]/g, ''));
    const quantity = parseInt(item.querySelector('.quantity').textContent);

    if (quantity > 0) {
        const existingItem = cart.find(i => i.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
            existingItem.total = existingItem.price * existingItem.quantity;
        } else {
            cart.push({ name, price, quantity, total: price * quantity });
        }

        updateCartCount();
        showAddedNotification(item);
        resetItemQuantity(item);
    }
}

// Show cart modal
function showCart() {
    updateCartDisplay();
    document.getElementById('cartModal').style.display = 'block';
}

// Hide cart modal
function hideCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = '';
    total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = '₹0';
        return;
    }

    cart.forEach((item, index) => {
        total += item.total;
        cartItems.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <span class="cart-item-name">${item.name}</span>
                    <div class="cart-item-controls">
                        <button onclick="updateCartQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-price">
                    <span>₹${item.total}</span>
                    <button onclick="removeFromCart(${index})" class="remove-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });

    cartTotal.textContent = `₹${total}`;
}

// Update cart quantity
function updateCartQuantity(index, change) {
    const item = cart[index];
    const newQuantity = item.quantity + change;

    if (newQuantity <= 0) {
        removeFromCart(index);
    } else {
        item.quantity = newQuantity;
        item.total = item.price * newQuantity;
        updateCartDisplay();
        updateCartCount();
    }
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    updateCartCount();
}

// Update cart count badge
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) return;
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

// Send order to Discord
async function sendOrderToDiscord(orderDetails) {
    const itemsList = orderDetails.items
        .map(item => `• ${item.name} x${item.quantity} - ₹${item.total}`)
        .join('\n');

    const embed = {
        title: '🛍️ New Order Received!',
        color: 0x00ff00,
        fields: [
            {
                name: '👤 Customer Details',
                value: `**Name:** ${orderDetails.customerName}\n**Table:** ${orderDetails.tableNumber}\n**Phone:** ${orderDetails.phoneNumber}`,
                inline: false
            },
            {
                name: '🍽️ Order Items',
                value: itemsList,
                inline: false
            },
            {
                name: '💰 Total Amount',
                value: `₹${orderDetails.total}`,
                inline: true
            },
            {
                name: '⏰ Order Time',
                value: orderDetails.orderTime,
                inline: true
            }
        ],
        footer: { text: 'Pizza Town Orders' },
        timestamp: new Date()
    };

    try {
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] })
        });

        if (!response.ok) throw new Error(`Failed to send order: ${response.status}`);
    } catch (error) {
        console.error('Discord webhook error:', error);
        throw new Error('Failed to send order notification');
    }
}

// Handle order submission
async function handleOrder(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Please add items to your cart before placing an order.');
        return;
    }

    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

    try {
        const orderDetails = {
            customerName: form.customerName.value,
            tableNumber: form.tableNumber.value,
            phoneNumber: form.phoneNumber.value,
            items: cart,
            total: total,
            orderTime: new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                dateStyle: 'medium',
                timeStyle: 'short'
            })
        };

        await sendOrderToDiscord(orderDetails);
        showOrderSuccess(orderDetails.tableNumber);
        resetCart();
        hideCart();
    } catch (error) {
        console.error('Order failed:', error);
        alert('Failed to place order. Please try again.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Place Order';
    }
}

// Show order success message
function showOrderSuccess(tableNumber) {
    const popup = document.getElementById('successPopup');
    if (!popup) return;
    
    document.getElementById('popupTableNumber').textContent = tableNumber;
    popup.style.display = 'block';
    setTimeout(() => popup.style.display = 'none', 3000);
}

// Reset cart after order
function resetCart() {
    cart = [];
    total = 0;
    updateCartDisplay();
    updateCartCount();
    document.getElementById('orderForm').reset();
}

// Show added to cart notification
function showAddedNotification(item) {
    const notification = document.createElement('div');
    notification.className = 'add-to-cart-notification';
    notification.textContent = 'Added to cart!';
    item.appendChild(notification);
    setTimeout(() => notification.remove(), 1000);
}

// Reset item quantity after adding to cart
function resetItemQuantity(item) {
    const quantitySpan = item.querySelector('.quantity');
    const minusBtn = item.querySelector('.minus');
    const addBtn = item.querySelector('.add-to-cart-btn');
    
    quantitySpan.textContent = '0';
    minusBtn.disabled = true;
    addBtn.disabled = true;
}
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        }
    });
});
// scroll managment
// Category Scroll Management
function initializeCategoryScroll() {
    const categorySection = document.createElement('div');
    categorySection.className = 'category-section';
    
    const categoryContainer = document.querySelector('.category-buttons');
    categoryContainer.parentNode.insertBefore(categorySection, categoryContainer);
    categorySection.appendChild(categoryContainer);

    // Add scroll buttons
    const scrollLeftBtn = document.createElement('button');
    const scrollRightBtn = document.createElement('button');
    
    scrollLeftBtn.className = 'category-scroll-btn scroll-left';
    scrollRightBtn.className = 'category-scroll-btn scroll-right';
    
    scrollLeftBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    scrollRightBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    categorySection.appendChild(scrollLeftBtn);
    categorySection.appendChild(scrollRightBtn);

    // Add scroll indicators
    const leftIndicator = document.createElement('div');
    const rightIndicator = document.createElement('div');
    
    leftIndicator.className = 'scroll-indicator left';
    rightIndicator.className = 'scroll-indicator right';
    
    categorySection.appendChild(leftIndicator);
    categorySection.appendChild(rightIndicator);

    // Scroll functionality
    const scrollAmount = 300;
    let scrollInterval;

    const initiateScroll = (direction) => {
        scrollInterval = setInterval(() => {
            categoryContainer.scrollLeft += direction * 10;
        }, 16);
    };

    const stopScroll = () => {
        clearInterval(scrollInterval);
    };

    scrollLeftBtn.addEventListener('mousedown', () => initiateScroll(-1));
    scrollRightBtn.addEventListener('mousedown', () => initiateScroll(1));
    scrollLeftBtn.addEventListener('mouseup', stopScroll);
    scrollRightBtn.addEventListener('mouseup', stopScroll);
    scrollLeftBtn.addEventListener('mouseleave', stopScroll);
    scrollRightBtn.addEventListener('mouseleave', stopScroll);

    // Click events for quick scroll
    scrollLeftBtn.addEventListener('click', () => {
        categoryContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        categoryContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Update button visibility
    const updateScrollButtons = () => {
        const { scrollLeft, scrollWidth, clientWidth } = categoryContainer;
        const maxScroll = scrollWidth - clientWidth;

        scrollLeftBtn.classList.toggle('visible', scrollLeft > 0);
        scrollRightBtn.classList.toggle('visible', scrollLeft < maxScroll - 1);
        
        leftIndicator.style.opacity = scrollLeft > 0 ? '1' : '0';
        rightIndicator.style.opacity = scrollLeft < maxScroll - 1 ? '1' : '0';
    };

    categoryContainer.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    updateScrollButtons();

    // Touch scroll with momentum
    let startX, scrollLeft, isScrolling = false;
    let startTime, startScroll, velocity = 0;

    categoryContainer.addEventListener('touchstart', (e) => {
        isScrolling = true;
        startX = e.touches[0].pageX - categoryContainer.offsetLeft;
        scrollLeft = categoryContainer.scrollLeft;
        startTime = Date.now();
        startScroll = scrollLeft;
        velocity = 0;
    }, { passive: true });

    categoryContainer.addEventListener('touchmove', (e) => {
        if (!isScrolling) return;
        const x = e.touches[0].pageX - categoryContainer.offsetLeft;
        const walk = (x - startX) * 2;
        categoryContainer.scrollLeft = scrollLeft - walk;
        
        const time = Date.now();
        const distance = categoryContainer.scrollLeft - startScroll;
        velocity = distance / (time - startTime);
    }, { passive: true });

    categoryContainer.addEventListener('touchend', () => {
        isScrolling = false;
        const momentum = velocity * 100;
        
        if (Math.abs(momentum) > 1) {
            categoryContainer.scrollBy({
                left: -momentum,
                behavior: 'smooth'
            });
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // ...existing initialization code...
    initializeCategoryScroll();
});
// TTHIS IS MENU TEL JS//
document.getElementById('phoneNumber').addEventListener('input', function(e) {
    const phoneNumber = e.target.value;
    const phoneError = document.getElementById('phoneError');
    
    // Remove any non-numeric characters
    e.target.value = phoneNumber.replace(/\D/g, '');
    
    // Check if length is exactly 10 digits
    if (phoneNumber.length !== 10) {
        phoneError.textContent = 'Please enter a 10-digit phone number';
        phoneError.style.display = 'block';
        e.target.classList.add('invalid');
    } else {
        phoneError.style.display = 'none';
        e.target.classList.remove('invalid');
        e.target.classList.add('valid');
    }
});

// Update your form submission handler
document.getElementById('orderForm').addEventListener('submit', function(e) {
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (phoneNumber.length !== 10) {
        e.preventDefault();
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
        document.getElementById('phoneError').style.display = 'block';
        return false;
    }
    // ... rest of your form submission code
});
