import React, { useState } from "react";
import { addProduct } from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddProductPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    summary: "",
    description: "",
    price: "",
    category_id: "",
    discount_type: "none",
    discount_value: "0",
    tags: "",
    stock_quantity: "0",
  });
  const [picture, setPicture] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (let key in form) {
        formData.append(key, form[key]);
      }
      if (picture) {
        formData.append("picture", picture);
      }

      const res = await addProduct(formData);
      if (res.success) {
        toast.success("Product added successfully!");
        navigate("/seller-dashboard");
      } else {
        toast.error(res.error || "Failed to add product");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="summary"
          placeholder="Summary"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="category_id"
          placeholder="Category ID"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="discount_type"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="none">None</option>
          <option value="percent">Percent</option>
          <option value="amount">Amount</option>
        </select>
        <input
          type="number"
          name="discount_value"
          placeholder="Discount Value"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="tags"
          placeholder="Tags (comma-separated)"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="stock_quantity"
          placeholder="Stock Quantity"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPicture(e.target.files[0])}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product kjdfvdn
        </button>
      </form>
    </div>
  );
}

export default AddProductPage;
