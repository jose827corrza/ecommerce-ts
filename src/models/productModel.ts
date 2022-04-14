import {BaseModel} from './baseModel';
import {Category} from './categoryModel';

export interface Product extends BaseModel {
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}

//DTOs

export interface CreateProduct extends Omit<Product, 'id' | 'category'>{
    category: Category['id']
}

export interface UpdateProduct extends Partial<CreateProduct>{}