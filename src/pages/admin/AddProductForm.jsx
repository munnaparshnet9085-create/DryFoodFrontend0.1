import React, { useState } from 'react';
import AddProduct from './AddProduct';

const AddProductForm = ({ onClose, onAdd }) => {

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("adminToken");

  const handleSave = async (formData) => {

    try {
      setLoading(true);

      const response = await fetch(
        "http://dryfoodapi.parshnet.com/api/product",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Product Added Successfully");

        if (onAdd) onAdd(data); // optional refresh
        if (onClose) onClose(); // 🔥 close modal
      }

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>

      <div style={{ background: '#fff', borderRadius: 8, padding: 32, minWidth: 400, position: 'relative' }}>

        <button onClick={onClose} style={{ position: 'absolute', top: 8, right: 8, background: 'transparent', border: 'none', fontSize: 20, cursor: 'pointer' }}>
          &times;
        </button>

        {loading && <p>Saving...</p>}

        <AddProduct onSave={handleSave} />

      </div>
    </div>
  );
};

export default AddProductForm;