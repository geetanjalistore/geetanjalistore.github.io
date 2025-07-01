// Admin Login
function adminLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "Geetanjali" && pass === "9690394370ks") {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
  } else {
    alert("Invalid login credentials");
  }
}

// Product Storage
let products = JSON.parse(localStorage.getItem("products")) || [];

function addProduct() {
  const name = document.getElementById("pname").value;
  const price = document.getElementById("pprice").value;
  const image = document.getElementById("pimage").files[0];

  if (!name || !price || !image) {
    alert("Fill all fields");
    return;
  }

  const reader = new FileReader();
  reader.onloadend = function () {
    const product = {
      name,
      price,
      image: reader.result,
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
  };
  reader.readAsDataURL(image);
}

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts();
}

function displayProducts() {
  const list = document.getElementById("product-list");
  if (!list) return;
  list.innerHTML = "";
  products.forEach((product, index) => {
    list.innerHTML += `
      <div>
        <img src="${product.image}" width="100"><br>
        <b>${product.name}</b> - ₹${product.price}
        <button onclick="deleteProduct(${index})">Delete</button>
      </div><hr>
    `;
  });
}

window.onload = displayProducts;
