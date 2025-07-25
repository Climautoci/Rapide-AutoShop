let products = [
  {
    "name": "Tapis de sol caoutchouc",
    "price": 12000,
    "img": "https://via.placeholder.com/250",
    "desc": "Tapis antidérapant pour voiture."
  },
  {
    "name": "Batterie 12V",
    "price": 70000,
    "img": "https://via.placeholder.com/250",
    "desc": "Batterie voiture longue durée."
  }
];

let cart = [];

function renderCatalogue() {
  const catalogue = document.getElementById('catalogue');
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <p><strong>${product.price.toLocaleString()} FCFA</strong></p>
      <button onclick="addToCart('${product.name}')">Ajouter au panier</button>
    `;
    catalogue.appendChild(div);
  });
}

function addToCart(productName) {
  const product = products.find(p => p.name === productName);
  cart.push(product);
  alert(`${productName} ajouté au panier`);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const totalEl = document.getElementById('total');
  if (cart.length === 0) {
    cartItems.textContent = 'Votre panier est vide.';
    totalEl.textContent = '';
    return;
  }
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const div = document.createElement('div');
    div.textContent = `${item.name} - ${item.price.toLocaleString()} FCFA`;
    cartItems.appendChild(div);
  });
  totalEl.innerHTML = `<strong>Total : ${total.toLocaleString()} FCFA</strong>`;
}

document.addEventListener('DOMContentLoaded', renderCatalogue);

document.getElementById('zoneSelect').addEventListener('change', function() {
  const zoneValue = this.value;
  let delivery = 0;
  if (zoneValue === 'sur_demande') {
    delivery = 'Tarif sur demande via WhatsApp.';
  } else if (zoneValue) {
    delivery = `Frais de livraison : ${parseInt(zoneValue).toLocaleString()} FCFA`;
  }
  document.getElementById('deliveryCost').textContent = delivery;
});

document.getElementById('checkoutBtn').addEventListener('click', function() {
  window.location.href = "checkout.html";
});
