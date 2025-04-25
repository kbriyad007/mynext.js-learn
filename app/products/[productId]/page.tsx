type ProductPageProps = {
  params: { productId: string };
};

export default function ProductDetails({ params }: ProductPageProps) {
  return <h1>Details about product {params.productId}</h1>;
}
