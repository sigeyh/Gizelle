let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const cartList = document.getElementById("cart");
  const totalSpan = document.getElementById("total");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.className = "flex justify-between items-center border-b pb-2";
    li.innerHTML = `
      <span>${item.name} - KSh ${item.price}</span>
      <button class="text-red-500" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });

  totalSpan.textContent = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);
