const products = [
  {
    id: 1,
    name: "Lakme Lipstick",
    price: 299,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Face Wash",
    price: 199,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Compact Powder",
    price: 249,
    image: "https://via.placeholder.com/150",
    function renderProducts() {
  const container = document.getElementById("product-list");
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChifunction addToWishlist(id) {
  const item = products.find(p => p.id === id);
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push(item);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert(`${item.name} added to wishlist!`);
    }ld(card);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.name} added to cart!`);
}

document.addEventListener("DOMContentLoaded", renderProducts);
