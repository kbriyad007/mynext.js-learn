interface ProductDetailsProps {
  params: {
    productId: string;
  };
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return <h1>Details about product {params.productId}</h1>;
}
