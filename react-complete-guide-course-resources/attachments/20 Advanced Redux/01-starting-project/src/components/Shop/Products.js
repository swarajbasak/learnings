import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
	{
		id: "p1",
		price: 10,
		title: "first book",
		description: "first book",
	},
	{
		id: "p2",
		price: 20,
		title: "second book",
		description: "second book",
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => {
					return (
						<ProductItem
							key={product.id}
							title={product.title}
							price={product.price}
							description={product.description}
							id={product.id}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default Products;
