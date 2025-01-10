import React, { createContext, useState, useContext } from 'react';

// Create a Context
const CategoriesContext = createContext();

// Create a provider component
export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    return (
        <CategoriesContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoriesContext.Provider>
    );
};

// Create a custom hook to use the CategoriesContext
export const useCategories = () => {
    return useContext(CategoriesContext);
};

