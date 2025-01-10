const api = {
    async getCategories() {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}Catalog/GetCatalogRoot`, {
                method: 'GET',
            });

            return await response.json();    
        } catch (error) {
            return error;
        }
    },

    async getProducts(id) {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}Catalog/GetCategoryProducts/${id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
            });
    
            return await response.json();    
        } catch (error) {
            return error;
        }
    },

    async getProductDetails(id) {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}Product/GetProductDetails/${id}`, {
                method: 'GET',
            });
    
            return await response.json();    
        } catch (error) {
            return error;
        }
    },
}

export default api;
