// Test Data
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1️⃣ Filter only inStock products
const inStockProducts = cart.filter(item => item.inStock);
console.log("In-stock products:", inStockProducts);

// 2️⃣ Map to new array with {name, totalPrice}
const productTotals = inStockProducts.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log("Products with total price:", productTotals);

// 3️⃣ Calculate grand total using reduce
const grandTotal = productTotals.reduce((sum, item) => sum + item.totalPrice, 0);
console.log("Grand total cart value:", grandTotal);

// 4️⃣ Find details of "Mouse"
const mouseDetails = cart.find(item => item.name === "Mouse");
console.log("Details of Mouse:", mouseDetails);

// 5️⃣ Find index of "Keyboard"
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log("Index of Keyboard:", keyboardIndex);
