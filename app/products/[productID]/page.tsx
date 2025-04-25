// app/products/[productID]/page.tsx

interface ProductPageProps {
  params: {
    productID: string;
  };
}

export default function ProductDetail({ params }: ProductPageProps) {
  return <h1>Product details: {params.productID}</h1>;
}
