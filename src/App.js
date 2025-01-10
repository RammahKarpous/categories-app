import './App.css';
import { useEffect, useState } from 'react';
import Categories from './components/Categories';
import get from './services/api/get';
import post from './services/api/post';

function App() {
	const [categories, setCategories] = useState([]);
	const [catalogProducts, setCatalogProducts] = useState([]);

	useEffect(() => {
		get("Catalog/GetCatalogRoot").then(res => setCategories(res));
	}, []);

	useEffect(() => {
		const getProducts = async () => {
			const products = [];

			for (const category of categories) {
				await post(`Catalog/GetCategoryProducts/${category.id}`).then(res => products.push(res));
			}

			setCatalogProducts(products);
		};

		if (categories.length > 0) getProducts();
	}, [categories]);

	return (
		<div className="container m-auto my-20 grid grid-cols-[1fr_3fr] gap-5">
			<div className="flex flex-col gap-2 p-5 bg-gray-100 rounded-xl">
				<h3 className="font-bold text-2xl mb-3">Categorieën</h3>

				{categories.map((category) => (
					<Categories key={category.id} category={category} />
				))}
			</div>

			<div className='bg-gray-100 p-5 rounded-xl'>
				{catalogProducts.map((catalogProduct, key) => (
					<div key={key} className='grid grid-cols-3 gap-5'>
						{catalogProduct.catalog_products_model.products.map((product) => (
							<div key={product.id}>
								<img src={product.default_picture_model.image_url} alt={product.default_picture_model.alternative_text} />
								<h4 className='font-bold'>{product.name}</h4>
								<p>{product.short_description}</p>
								<p>{product.product_price.price}</p>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
