import React, { useState } from "react";
import './App.css'
import ProductList from "./assets/Сomponents/ProductList";
import AddProductModal from "./assets/Сomponents/AddProductModal";

function App() {
    const [products, setProducts] = useState([
        { name: "Компьютер", description: "Обычный ПК", price: 500, year: 2022, manufacturer: "HP" },
        { name: "Ноутбук", description: "Ультрабук", price: 1000, year: 2023, manufacturer: "Apple" },
    ]);
    

    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const handleSort = () => {
        const sortedProducts = [...products].sort((a, b) =>
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );
        setProducts(sortedProducts);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>

            <h1>Магазин Компьютерных Запчастей</h1>
            <button onClick={handleSort}>
                Сортировать по цене ({sortOrder === "asc" ? "по возрастанию" : "по убыванию"})
            </button>
            <input
                type="text"
                placeholder="Поиск по имени"
                value={searchTerm}
                onChange={handleSearch}
            />
            <ProductList products={filteredProducts}/>
            <AddProductModal addProduct={addProduct}/>
        </div>
    );
}

export default App;
