import CategoryProducts from "../../category/[slug]/CatProducts";

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );

  const products = await res.json();

  const categoryProducts = products.filter(
    (product) => product.category === slug
  );
// had to use CategoryProducts in diff page because i used useState which is 
// not supporting here as its server site rendering i guess
  return <CategoryProducts products={categoryProducts} />;
}