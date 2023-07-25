class Product {
  constructor(id, title, description, price, thumbnail, code, stock) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    if (this.products.some(product => product.code === code)) {
      console.log("El código ya está en uso, por favor ingresa otro código");
      return;
    }

    const newProduct = new Product(this.nextId++, title, description, price, thumbnail, code, stock);
    this.products.push(newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductByCode(code) {
    return this.products.find(product => product.code === code) || null;
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      console.log("Error: Not found");
      return null;
    }
    return product;
  }
}

// Ejemplo de uso:
const productManager = new ProductManager();

productManager.addProduct("Laptop", "Potente computadora portátil", 1000, "laptop.jpg", "LP123", 10);
productManager.addProduct("Smartphone", "Teléfono inteligente de última generación", 800, "smartphone.jpg", "SP456", 15);
productManager.addProduct("Tablet", "Tableta versátil para uso diario", 500, "tablet.jpg", "TB789", 20);
productManager.addProduct("Smartwatch", "Reloj inteligente con seguimiento de actividad", 250, "smartwatch.jpg", "SP123", 5); // Intento agregar un producto con código duplicado

const allProducts = productManager.getProducts();
console.log(allProducts);

const productByCode = productManager.getProductByCode("SP456");
console.log(productByCode);

const productById = productManager.getProductById(2);
console.log(productById);

const productByIdNotFound = productManager.getProductById(5); // Intento buscar un producto con id que no existe