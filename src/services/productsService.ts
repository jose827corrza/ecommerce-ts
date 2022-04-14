import axios from 'axios';
import {Product, CreateProduct, UpdateProduct} from '../models/productModel';

export class ProductService {

    async getProducts(): Promise<Product[]> {
        const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
        return data;
    }

    async getProduct(productId: Product['id']): Promise<Product>{
        const {data} = await axios.get<Product>(`https://api.escuelajs.co/api/v1/products/${productId}`)
        return data;
    }
}