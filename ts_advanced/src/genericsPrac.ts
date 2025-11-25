// 🧪 Practice Task (Real-World)

// Create an interface Product:

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }


// Make:

// Partial<Product> → for updates

// Pick<Product, "id" | "name"> → for listing previews

// Omit<Product, "description"> → for API response

// Readonly<Product> → for constant catalog

// Record<"small" | "medium" | "large", Product> → sizes mapping

// Print examples in console.

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Partial<Product> → for updates
function updateProduct(id: number, data: Partial<Product>) {
  console.log(`Updating Product ${id}`, data);
}

updateProduct(1, { price: 19.99 });
updateProduct(2, { name: "New Product Name" });

// Pick<Product, "id" | "name"> → for listing previews
type ProductPreview = Pick<Product, "id" | "name">;

const preview: ProductPreview = { id: 1, name: "Sample Product" };
console.log("Product Preview:", preview);

// Omit<Product, "description"> → for API response
type ProductWithoutDescription = Omit<Product, "description">;

const productWithoutDescription: ProductWithoutDescription = { id: 2, name: "Another Product", price: 29.99 };
console.log("Product Without Description:", productWithoutDescription);

// Readonly<Product> → for constant catalog
const constantProduct: Readonly<Product> = { id: 3, name: "Constant Product", price: 39.99, description: "This product is constant." };
console.log("Constant Product:", constantProduct);

// Record<"small" | "medium" | "large", Product> → sizes mapping
type ProductSize = "small" | "medium" | "large";
const productSizes: Record<ProductSize, Product> = {
  small: { id: 4, name: "Small Product", price: 9.99, description: "Small size product." },
  medium: { id: 5, name: "Medium Product", price: 19.99, description: "Medium size product." },
  large: { id: 6, name: "Large Product", price: 29.99, description: "Large size product." },
};

console.log("Product Sizes:", productSizes);