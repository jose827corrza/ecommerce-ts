import axios from 'axios';
import {Product, CreateProduct, UpdateProduct} from '../models/productModel';
import faker from '@faker-js/faker';
import { randomInt } from 'crypto';

export class ProductService {
    private products: Product[]
    constructor(){
        this.products = []
    }

    // async getProducts(): Promise<Product[]> {
    //     const {data} = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    //     return data;
    // }

    createData(){
        for( let i = 0; i<100; i++ ){
            let randomProduct: Product = {
                title: faker.commerce.product(),
                price: parseInt(faker.commerce.price(), 10),
                description: faker.commerce.productDescription(),
                category: {
                    id: randomInt(5),
                    name: faker.commerce.department(),
                    image: faker.image.imageUrl()
                },
                images: [faker.image.imageUrl()],
                id: faker.datatype.number()
            }
            this.products.push(randomProduct);
        }
    }

    async createProduct(data: CreateProduct): Promise<Product>{
        const newProduct = {
            ...data,
            id: faker.datatype.number()
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async getProducts(): Promise<Product[]>{
        return this.products;
    }

    async getProduct(productId: Product['id']): Promise<Product | undefined>{
        // const {data} = await axios.get<Product>(`https://api.escuelajs.co/api/v1/products/${productId}`)
        // return data;
        //const product = this.products[1];
        const product = this.products.find(item => item.id == productId);
        
        return product;
    }

    async updateProduct(productId: Product['id'], changes: UpdateProduct): Promise<Product>{
        const index = await this.products.findIndex(item => item.id == productId)
        const product = this.products[index]
        this.products[index] = {
            ... product,
            ... changes
        }
        return this.products[index];
    }

    async deleteProduct(productId: Product['id']): Promise<Product>{
        const index = await this.products.findIndex(item => item.id == productId);
        const deletedProduct = this.products[index];
        this.products.splice(index,1);
        return deletedProduct;
    }
}