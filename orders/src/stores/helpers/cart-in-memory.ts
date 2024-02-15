import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

{/*Helpers: local pra criar funções separadas
 pra manipular o estado na memoria e persistir no dispotivo */}
 export function add(products: ProductCartProps[], newProduct: ProductProps){
    const existingProduct = products.find(({id}) => newProduct.id === id )

    if (existingProduct){
        {/*Verificar se o produto existe pelo id, retorna um novo array, se for o mesmo id não retorna um novo 
    e sim incrementa a quantidade*/}
        return products.map((product) => product.id === existingProduct.id
        ? {...product, quantity: product.quantity+1}
        : product
        )
    }

    return [...products, {... newProduct, quantity: 1}]
 }