import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import get from "../services/api/get";

export default function Product() {
    // const [product, setProduct] = useState({});
    const slug = useLocation().pathname.split("/")[2];

    console.log(slug);

    // useEffect(() => {
    //     get(`Product/GetProductDetails/`).then(res => setProduct(res));
    // }, [slug]);

    return (
        <div className="container grid grid-cols-[20em_2fr]">

            <h1>Product</h1>
        </div>
    );
}
