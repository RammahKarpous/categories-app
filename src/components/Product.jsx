import React from "react";

export default function Product({ product }) {
    const { image_url, alternate_text } = product.default_picture_model;
    const { name, short_description } = product;
    const { price } = product.product_price;

    return (
        <div className="flex flex-col gap-5 p-2 pb-8 transition-all duration-500 bg-white rounded-2xl">
            <div className="aspect-[4/2.8] relative w-full overflow-hidden flex items-center justify-center rounded-xl">
                <img src={image_url} alt={alternate_text} className="object-cover transition-all duration-500 size-full" />
            </div>

            <div className="flex flex-col gap-2 px-7">
                <div>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="text-sm text-gray-500">{price}</p>
                </div>
                
                <p className="text-base font-normal line-clamp-2">{short_description}</p>
            </div>
        </div>
    );
}
