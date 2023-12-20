export default function ProductsDetails( { 
    params, 
 }: {
    params: {productId: string};
 }) {
    return <h1>Details about product {params.productId} </h1>;
}
