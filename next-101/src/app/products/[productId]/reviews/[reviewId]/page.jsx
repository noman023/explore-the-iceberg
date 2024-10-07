export default function ReviewNumber({ params: { reviewId, productId } }) {
  return (
    <div>
      showing review {reviewId} of product {productId}
    </div>
  );
}
