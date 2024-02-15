import { ProductProps } from "@/utils/data/products";
import {create} from "zustand";
import * as cartInMemory from "./helpers/cart-in-memory"

{/*Store: estrutura utilizada para guardar e compartilhar e estado com toda a aplicação*/}

export type ProductCartProps = ProductProps & {
    quantity: number
}

type StateProps = {
    products: ProductCartProps[]
    add: (product: ProductProps) => void
}

export const useCartStore = create<StateProps>((set) => ({
     products:[],
     add: (product: ProductProps) => set((state) => ({
        products: cartInMemory.add(state.products, product)
     })),
}))