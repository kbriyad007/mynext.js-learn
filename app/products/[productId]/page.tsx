type ProductPageProps = {
  params: { productId: number };  // Change to number here
};

export default function ProductDetails({ params }: ProductPageProps) {
  return <h1>Details about product {params.productId}</h1>;
}

