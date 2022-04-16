import {BaseModel} from './baseModel';
import {Category} from './categoryModel';
//extends BaseModel
export interface Product  {
    id: number,
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}

//DTOs

export interface CreateProduct extends Omit<Product, 'id' | 'category'>{
    category: Category
}

export interface UpdateProduct extends Partial<CreateProduct>{}