import React, { useState, useEffect } from "react";
import { editProduct, fetchProductById } from "../services/api";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function EditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    summary: "",
    description: "",
    price: "",
    discount_type: "none",
    discount_value: "0",
    tags: "",
    stock_quantity: "0",
  });
  const [picture, setPicture] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetchProductById(id);
        if (res.success) {
          const product = res.product;
          setForm({
            title: product.title || "",
            summary: product.summary || "",
            description: product.description || "",
            price: product.price.toString() || "",
            discount_type: product.discount_type || "none",
            discount_value: product.discount_value?.toString() || "0",
            tags: product.tags?.join(", ") || "",
            stock_quantity: product.stock_quantity?.toString() || "0",
          });
        }
      } catch (err) {
        toast.error("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Then in your return:
  if (loading) {
    return <div>Loading...</div>;
  }

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

      const res = await editProduct(id, formData);
      if (res.success) {
        toast.success("Product updated successfully!");
        navigate("/seller-dashboard");
      } else {
        toast.error(res.error || "Failed to update product");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="summary"
          placeholder="Summary"
          value={form.summary}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="discount_type"
          value={form.discount_type}
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
          value={form.discount_value}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="tags"
          placeholder="Tags (comma-separated)"
          value={form.tags}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="stock_quantity"
          placeholder="Stock Quantity"
          value={form.stock_quantity}
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
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProductPage;
