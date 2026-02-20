

import { useState } from "react";

export default function AddProduct({ onClose, onAdd, showModal = true }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    stock: 0,
    status: "Active",
  });

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.title || !formData.price) {
      alert("Please fill in Product Name and Price");
      return;
    }

    // Prepare product data
    const newProduct = {
      id: Date.now(),
      title: formData.title,
      name: formData.title,
      category: formData.category,
      description: formData.description,
      price: formData.price,
      stock: formData.stock,
      status: formData.status,
      image: preview || "https://via.placeholder.com/300",
    };

    // Call onAdd callback to add product to table
    if (typeof onAdd === "function") {
      onAdd(newProduct);
    }

    // Close modal if provided
    if (typeof onClose === "function") {
      onClose();
    }

    // Reset form
    setFormData({
      title: "",
      category: "",
      description: "",
      price: "",
      stock: 0,
      status: "Active",
    });
    setImage(null);
    setPreview(null);
    
    alert("Product added successfully!");
  };

  const content = (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          {/* IMAGE UPLOAD */}
          <div className="border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center text-center">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg"
              />
            ) : (
              <>
                <div className="text-4xl text-gray-400">☁</div>
                <p className="mt-2 text-sm">Upload Image</p>
              </>
            )}

            <label className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
              + Choose Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>

            <p className="text-xs text-gray-400 mt-2">
              Recommended size: 800×800px
            </p>
          </div>

          {/* FORM FIELDS */}
          <div className="grid grid-cols-1 gap-3">
            <div>
              <label className="text-sm font-medium">Product Name</label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
                placeholder="Product Name"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
                required
              >
                <option value="">Select Category</option>
                <option value="Dry Fruits">Dry Fruits</option>
                <option value="Spices">Spices</option>
                <option value="Grocery">Grocery</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                maxLength="200"
                className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
                placeholder="Product description..."
              ></textarea>
            </div>

            <div>
              <label className="text-sm font-medium">Price</label>
              <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                type="number"
                className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
                placeholder="Price"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Quantity</label>
              <input
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                type="number"
                className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
                placeholder="Quantity"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* SUBMIT */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow font-medium"
          >
            + Add Product
          </button>
        </div>
      </form>
    </div>
  );

  // If onClose is provided and showModal is true, render as modal overlay
  if (typeof onClose === "function" && showModal !== false) {
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="relative w-full max-w-4xl mx-4"> 
          <div className="bg-white rounded-2xl overflow-auto max-h-[85vh] p-6">
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg text-xl"
            >
              ✕
            </button>

            {content}
          </div>
        </div>
      </div>
    );
  }

  // Otherwise render as a normal form card
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      {content}
    </div>
  );
}
