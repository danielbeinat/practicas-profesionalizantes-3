class Model {
  constructor() {
    this.stock = [
      {
        id: "1",
        nombre: "Mermelada",
        precio: 648.7,
        descripcion: "Arcor.",
        imagen:
          "https://arcorencasa.com/wp-content/uploads/2021/11/20211123-13218.png",
        stock: 10,
      },
      {
        id: "2",
        nombre: "Hamburguesas Paty Clásicas",
        precio: 3119.9,
        descripcion: "Paty.",
        imagen:
          "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2Fpaty%20de%2012.png&w=750&q=75",
        stock: 5,
      },
      {
        id: "3",
        nombre: "Queso La Serenísima Cremón Cremoso",
        precio: 1119.9,
        descripcion: "500 Gr.",
        imagen:
          "https://tualmacen.com.ar/_next/image?url=https%3A%2F%2Fimagenes-tualmacen.nyc3.digitaloceanspaces.com%2Fuploads%2Fmod_productos%2FID-5221-1.jpg&w=750&q=75",
        stock: 8,
      },
    ];
    this.cart = [];
    this.total = 0.0;
  }

  addToCart(article, quantity) {
    const existingCartItem = this.cart.find((item) => item.article === article);
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      this.cart.push({ article, quantity });
    }
    this.calculateTotal();
  }

  removeFromCart(cartItem) {
    const itemIndex = this.cart.findIndex((item) => item === cartItem);
    if (itemIndex !== -1) {
      this.cart.splice(itemIndex, 1);
    }
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cart.reduce((acc, cartItem) => {
      const { article, quantity } = cartItem;
      const articlePrice = article.precio;
      return acc + articlePrice * quantity;
    }, 0);
  }
}

class View {
  constructor() {
    this.articlesContainer = document.getElementById("articles");
    this.cartItemsContainer = document.getElementById("cartItems");
    this.checkoutButton = document.getElementById("checkoutBtn");
    this.totalValueElement = document.getElementById("totalValue");
  }

  renderArticles(articles) {
    this.articlesContainer.innerHTML = "";
    articles.forEach((article) => {
      const articleElement = document.createElement("div");
      articleElement.className = "article";

      const imageElement = document.createElement("img");
      imageElement.src = article.imagen;
      articleElement.appendChild(imageElement);

      const articleInfoElement = document.createElement("div");
      articleInfoElement.className = "article-info";
      articleInfoElement.innerHTML = `
          <h3>${article.nombre}</h3>
          <p class="article-price">$${article.precio.toFixed(2)}</p>
          <p>${article.stock} unidades disponibles</p>
        `;
      articleElement.appendChild(articleInfoElement);

      const articleActionsElement = document.createElement("div");
      articleActionsElement.className = "article-actions";
      const quantityElement = document.createElement("div");
      quantityElement.className = "quantity";
      const quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.min = "0";
      quantityInput.max = article.stock.toString();
      quantityInput.value = "0";
      quantityElement.appendChild(quantityInput);
      const incrementButton = document.createElement("button");
      incrementButton.textContent = "+";
      incrementButton.addEventListener("click", () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < article.stock) {
          quantityInput.value = (currentValue + 1).toString();
        }
      });
      quantityElement.appendChild(incrementButton);
      const decrementButton = document.createElement("button");
      decrementButton.textContent = "-";
      decrementButton.addEventListener("click", () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 0) {
          quantityInput.value = (currentValue - 1).toString();
        }
      });
      quantityElement.appendChild(decrementButton);
      articleActionsElement.appendChild(quantityElement);
      const addButton = document.createElement("button");
      addButton.textContent = "Agregar";
      addButton.addEventListener("click", () => {
        const quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
          controller.addToCart(article, quantity);
        }
      });
      articleActionsElement.appendChild(addButton);

      articleElement.appendChild(articleActionsElement);

      this.articlesContainer.appendChild(articleElement);
    });
  }

  renderCart(cart) {
    this.cartItemsContainer.innerHTML = "";
    cart.forEach((cartItem) => {
      const { article, quantity } = cartItem;
      const cartItemElement = document.createElement("li");
      cartItemElement.innerHTML = `
          <span>${article.nombre}</span>
          <span>Cantidad: ${quantity}</span>
          <button class="removeBtn">Eliminar</button>
        `;
      const removeButton = cartItemElement.querySelector(".removeBtn");
      removeButton.addEventListener("click", () => {
        controller.removeFromCart(cartItem);
      });
      this.cartItemsContainer.appendChild(cartItemElement);
    });
    this.renderTotal(controller.model.total);
  }

  renderTotal(total) {
    this.totalValueElement.textContent = `Valor total: $${total.toFixed(2)}`;
  }

  setCheckoutButtonHandler(handler) {
    this.checkoutButton.addEventListener("click", handler);
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.setCheckoutButtonHandler(this.confirmOrder.bind(this));
  }

  addToCart(article, quantity) {
    this.model.addToCart(article, quantity);
    this.view.renderCart(this.model.cart);
  }

  removeFromCart(cartItem) {
    this.model.removeFromCart(cartItem);
    this.view.renderCart(this.model.cart);
  }

  confirmOrder() {
    alert("Orden de compra confirmada. ¡Gracias por su compra!");
    this.model.cart.length = 0;
    this.view.renderCart(this.model.cart);
  }

  init() {
    this.view.renderArticles(this.model.stock);
    this.view.renderCart(this.model.cart);
  }
}

const model = new Model();
const view = new View();
const controller = new Controller(model, view);
controller.init();
