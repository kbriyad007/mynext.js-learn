type Props = {
  params: {
    productID: string;
  };
};
export default function ProductDetail({params}:Props) {
  return <h1>Product details{params.productID}</h1>;
}
