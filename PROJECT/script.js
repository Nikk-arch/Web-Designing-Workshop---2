const products = [
{
id:1,
name:"iPhone 15 Pro",
price:129999,
image:"https://images.unsplash.com/photo-1695048133142-1a20484d2569"
},
{
id:2,
name:"Nike Shoes",
price:4999,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},
{
id:3,
name:"Smart Watch",
price:2999,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},
{
id:4,
name:"Gaming Laptop",
price:79999,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
},
{
id:5,
name:"Wireless Headphones",
price:2499,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},
{
id:6,
name:"DSLR Camera",
price:54999,
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
}
];

const productContainer = document.getElementById("productContainer");
const cartItems = document.getElementById("cartItems");
const totalElement = document.getElementById("total");
const cartCount = document.getElementById("cartCount");

let cart = [];

function displayProducts(items){

productContainer.innerHTML = "";

items.forEach(product => {

productContainer.innerHTML += `
<div class="card">
<img src="${product.image}">
<div class="card-content">
<h3>${product.name}</h3>
<p class="price">₹${product.price}</p>
<button class="btn"
onclick="addToCart(${product.id})">
Add To Cart
</button>
</div>
</div>
`;

});
}

function addToCart(id){

const item = products.find(product => product.id === id);

cart.push(item);

updateCart();
}

function updateCart(){

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<li>
${item.name} - ₹${item.price}
<button class="remove"
onclick="removeItem(${index})">
Remove
</button>
</li>
`;

});

cartCount.textContent = cart.length;
totalElement.textContent = total;
}

function removeItem(index){

cart.splice(index,1);

updateCart();
}

document.getElementById("search")
.addEventListener("keyup",(e)=>{

const filtered = products.filter(product =>
product.name.toLowerCase()
.includes(e.target.value.toLowerCase())
);

displayProducts(filtered);

});

displayProducts(products);

document.querySelector(".checkout")
.addEventListener("click",()=>{

if(cart.length===0){
alert("Cart is Empty!");
}
else{
alert("Order Placed Successfully 🎉");
cart=[];
updateCart();
}

});