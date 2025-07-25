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

let cart = [];

function addToCart(productName) {
  const product = products.find(p => p.name === productName);
  cart.push(product);
  alert(`${productName} ajouté au panier`);
}

document.addEventListener('DOMContentLoaded', renderCatalogue);
