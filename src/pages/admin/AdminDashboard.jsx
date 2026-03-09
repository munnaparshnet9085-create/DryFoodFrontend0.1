import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import AddProductForm from "./AddProductForm";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Badam",
      price: 100,
      qty: 250,
      image:
        "https://images.unsplash.com/photo-1599599810694-b5ac4dd4eae9?auto=format&fit=crop&w=800&q=80",
      description: "Premium quality almonds",
      status: "Active",
    },
    {
      id: 2,
      name: "Cashew",
      price: 200,
      qty: 150,
      image:
        "https://images.unsplash.com/photo-1599599810694-b5ac4dd4eae9?auto=format&fit=crop&w=800&q=80",
      description: "Fresh cashew nuts",
      status: "Active",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

const handleAddProduct = (newProduct) => {
  setProducts((prev) => [
    ...prev,
    {
      id: newProduct._id || Date.now(),
      name: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      image: newProduct.image || "https://via.placeholder.com/300",
    },
  ]);

  setShowAddModal(false);
};

  const deleteProduct = (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 relative">
        
        {/* ✅ Fixed Header at Top */}
        <div className="fixed top-0 right-0 left-[250px] z-40 bg-gray-100 p-6 shadow-sm">
          <Header onAddClick={() => setShowAddModal(true)} />
        </div>

        {/* ✅ Content Area */}
        <main className="pt-32 px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between text-sm mb-3">
                    <span className="font-bold text-blue-600">
                      ₹ {product.price}
                    </span>
                    <span className="text-gray-600">
                      Stock: {product.qty}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {product.status}
                    </span>

                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {showAddModal && (
            <AddProductForm
              onClose={() => setShowAddModal(false)}
              onAdd={handleAddProduct}
            />
          )}
        </main>
      </div>
    </div>
  );
}