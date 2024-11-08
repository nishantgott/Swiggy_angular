import { ProductDetails } from "./product-details.model";

export interface CartDetails {
    product: ProductDetails;
    quantity: number;
}