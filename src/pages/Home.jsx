import React, { useEffect, useState } from "react";
import api from "../services/api";
import Products from "../components/Products";

export default function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.getCategories().then((res) => setCategories(res));
    }, []);

    return (
        <div className="container grid gap-5">
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="block text-2xl font-bold transition-colors rounded-lg"
                >
                    <h2 className="pb-5 mt-10 mb-5 text-3xl border-b border-gray-300">{category.name}</h2>

                    <Products catalogId={category.id} />
                </div>
            ))}
        </div>
    );
}
