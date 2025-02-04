import React, { useEffect, useState } from "react";
import api from "../services/api";
import Product from "./Product";

export default function Products({ catalogId }) {
    const [catalogProducts, setCatalogProducts] = useState([]);

    useEffect(() => {
        api.getProducts(catalogId).then((res) => setCatalogProducts(res));
    }, [catalogId]);

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {catalogProducts?.catalog_products_model?.products?.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}
