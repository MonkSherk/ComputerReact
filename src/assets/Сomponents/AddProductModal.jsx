import { useState } from "react";
import "./Styles/AddProductModal.css";
// eslint-disable-next-line react/prop-types
function AddProductModal({ addProduct }) {
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: "",
        year: "",
        manufacturer: "",
    });

    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        addProduct(newProduct);
        setNewProduct({ name: "", description: "", price: "", year: "", manufacturer: "" });
    };

    return (
        <div>
            <h2>Добавить товар</h2>
            <input
                name="name"
                placeholder="Название"
                value={newProduct.name}
                onChange={handleChange}
            />
            <input
                name="description"
                placeholder="Описание"
                value={newProduct.description}
                onChange={handleChange}
            />
            <input
                name="price"
                type="number"
                placeholder="Цена"
                value={newProduct.price}
                onChange={handleChange}
            />
            <input
                name="year"
                type="number"
                placeholder="Год"
                value={newProduct.year}
                onChange={handleChange}
            />
            <input
                name="manufacturer"
                placeholder="Производитель"
                value={newProduct.manufacturer}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Добавить товар</button>
        </div>
    );
}

export default AddProductModal;