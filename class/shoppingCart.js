class Cart {
  #products;

  constructor() {
    this.#products = {};
  }

  addProduct({ name, price, quantity = 1 }) {
    if (this.#products[name]) {
      this.#products[name].quantity += quantity;
    } else {
      this.#products[name] = { price, quantity };
    }
  }

  removeProduct(name) {
    delete this.#products[name];
  }

  calculateTotal() {
    return Object.values(this.#products).reduce(
      (total, { price, quantity }) => total + price * quantity,
      0
    );
  }

  displayCart() {
    const productEntries = Object.entries(this.#products);
    if (!productEntries.length) {
      console.log("Cart is empty!");
      return;
    }
    const tableData = productEntries.map(([name, { price, quantity }]) => ({
      Product: name,
      Price: price,
      Quantity: quantity,
      Subtotal: price * quantity,
    }));
    console.table(tableData);
  }

  clearCart() {
    this.#products = {};
  }

  getTotalItems() {
    return Object.values(this.#products).reduce(
      (count, { quantity }) => count + quantity,
      0
    );
  }
}

const cart = new Cart();

cart.addProduct({ name: "Apple", price: 2, quantity: 3 });
cart.addProduct({ name: "Banana", price: 1, quantity: 5 });
cart.addProduct({ name: "Apple", price: 2, quantity: 2 });

cart.displayCart();
console.log(`Total: $${cart.calculateTotal()}`);
console.log(`Total Items: ${cart.getTotalItems()}`);

cart.removeProduct("Banana");
cart.displayCart();
