import React, { useEffect, useState } from 'react';

const AddProduct = ({ onSave }) => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    status: 'Active',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem("adminToken");

  const GetCategory = async () => {
    try {
      const response = await fetch(
        "http://dryfoodapi.parshnet.com/api/category",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setCategories(data);
      }

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    GetCategory();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setProduct((prev) => ({ ...prev, image: file }));
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("categoryId", product.category);
    formData.append("image", image);

    onSave(formData); // send to parent
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 24, borderRadius: 8, maxWidth: 800, margin: 'auto' }}>
      <h2>Product Image</h2>
      <div style={{ display: 'flex', gap: 24 }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="image-upload" style={{ display: 'block', marginBottom: 8 }}>
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 8 }} />
            ) : (
              <div style={{ width: 120, height: 120, border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                Upload Image
              </div>
            )}
          </label>

          <input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'block', marginTop: 8 }} />
          <small>Recommended size: 800x800px</small>
        </div>

        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input name="title" value={product.title} onChange={handleChange} placeholder="Product Title" required style={{ padding: 8 }} />

          <textarea name="description" value={product.description} onChange={handleChange} placeholder="Product Description" maxLength={500} rows={3} style={{ padding: 8 }} />

          <input name="price" value={product.price} onChange={handleChange} placeholder="Price" type="text" required style={{ padding: 8 }} />

          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            style={{ padding: 8 }}
          >
            <option value="">Select Category</option>

            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}

          </select>
        </div>
      </div>

      <button type="submit" style={{ marginTop: 24, padding: '10px 32px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
        Save Product
      </button>
    </form>
  );
};

export default AddProduct;