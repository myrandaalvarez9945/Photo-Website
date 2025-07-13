function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Make sure all items have quantity values
  const totalCount = cartItems.reduce((sum, item) => {
    const qty = parseInt(item.quantity) || 0;
    return sum + qty;
  }, 0);

  const cartLink = document.getElementById("cart-link");
  if (cartLink) {
    cartLink.textContent = `Cart (${totalCount})`;
  }
}

// Make it globally callable in any script
window.updateCartCount = updateCartCount;

// Call on load
document.addEventListener("DOMContentLoaded", updateCartCount);