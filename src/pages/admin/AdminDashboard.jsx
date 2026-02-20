


import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import AddProductForm from "./Addproduct";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Badam",
      price: 100,
      qty: 250,
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd4eae9",
      description: "Premium quality almonds",
    },
    {
      id: 2,
      name: "Cashew",
      price: 200,
      qty: 150,
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd4eae9",
      description: "Fresh cashew nuts",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Handle adding new product
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newProduct.title || newProduct.name,
        category: newProduct.category || "",
        description: newProduct.description || "",
        price: newProduct.price,
        qty: newProduct.stock,
        status: newProduct.status || "Active",
        image: newProduct.image || "https://via.placeholder.com/300",
      },
    ]);
  };

  // Filter products by search
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete product
  const deleteProduct = (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header onAddClick={() => setShowAddModal(true)} />

        {/* Main Content - Full Width Products Table */}
        <div className="bg-white rounded-2xl shadow p-6 mt-6">
          <div className="flex justify-between items-center mb-6">
            {/* <h2 className="text-2xl font-bold">Admin</h2> */}
            {/* <input
              type="text"
              placeholder="Search Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border rounded-lg w-64"
            /> */}
          </div>

          {/* Products Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="border-b">
                  <th className="p-4 text-left font-semibold">Product Name</th>
                  <th className="p-4 text-left font-semibold">Category</th>
                  <th className="p-4 text-left font-semibold">Description</th>
                  <th className="p-4 text-left font-semibold">Product Image</th>
                  <th className="p-4 text-left font-semibold">Price</th>
                  <th className="p-4 text-left font-semibold">Quantity</th>
                  <th className="p-4 text-left font-semibold">Status</th>
                  <th className="p-4 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">{product.name}</td>
                      <td className="p-4">{product.category || "-"}</td>
                      <td className="p-4 truncate max-w-xl">{product.description || "-"}</td>
                      <td className="p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          onClick={() => setSelectedProduct(product)}
                          className="w-16 h-16 rounded-lg object-cover cursor-pointer"
                        />
                      </td>
                      <td className="p-4">₹{product.price}</td>
                      <td className="p-4">{product.qty}</td>
                      <td className="p-4">{product.status || "-"}</td>
                      <td className="p-4 flex gap-2">
                        <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
                          ✏️
                        </button>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="px-3 py-2 border rounded-lg hover:bg-red-50"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-500">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-2xl relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-2xl font-bold"
              >
                ✕
              </button>
              <div className="flex gap-8 flex-col md:flex-row">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                />
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
                  <p className="mb-2"><b>Category:</b> {selectedProduct.category || "-"}</p>
                  <p className="mb-2"><b>Price:</b> ₹{selectedProduct.price}</p>
                  <p className="mb-2"><b>Quantity:</b> {selectedProduct.qty}</p>
                  <p className="mb-2"><b>Status:</b> {selectedProduct.status || "-"}</p>
                  <p className="text-gray-600 mt-4">{selectedProduct.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Product Modal */}
        {showAddModal && (
          <AddProductForm 
            onClose={() => setShowAddModal(false)} 
            onAdd={handleAddProduct}
            showModal={true}
          />
        )}
      </main>
    </div>
  );
}

