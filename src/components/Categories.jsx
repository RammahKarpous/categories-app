import React from "react";

export default function Categories({category}) {
    return (
        <a href={`categorie${category.route}`} className="hover:text-blue-500 transition-colors">{category.name} {category.id}</a>    
    );
}
