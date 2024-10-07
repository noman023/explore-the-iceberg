import { notFound } from "next/navigation";

export default function SingleProduct({ params: { productId } }) {
  if (parseInt(productId) > 100) {
    notFound();
  }

  return <div>single product {productId} page</div>;
}
