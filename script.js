function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item + " added to cart!");
}
function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    alert("Items in cart: " + cart.join(', '));
}
