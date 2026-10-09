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

  return <CategoryProducts products={categoryProducts} />;
}