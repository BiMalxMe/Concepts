"use strict";
// 🧪 Practice Task (Real-World)
// Partial<Product> → for updates
function updateProduct(id, data) {
    console.log(`Updating Product ${id}`, data);
}
updateProduct(1, { price: 19.99 });
updateProduct(2, { name: "New Product Name" });
const preview = { id: 1, name: "Sample Product" };
console.log("Product Preview:", preview);
const productWithoutDescription = { id: 2, name: "Another Product", price: 29.99 };
console.log("Product Without Description:", productWithoutDescription);
// Readonly<Product> → for constant catalog
const constantProduct = { id: 3, name: "Constant Product", price: 39.99, description: "This product is constant." };
console.log("Constant Product:", constantProduct);
const productSizes = {
    small: { id: 4, name: "Small Product", price: 9.99, description: "Small size product." },
    medium: { id: 5, name: "Medium Product", price: 19.99, description: "Medium size product." },
    large: { id: 6, name: "Large Product", price: 29.99, description: "Large size product." },
};
console.log("Product Sizes:", productSizes);
