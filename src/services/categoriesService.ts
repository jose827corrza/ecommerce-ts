import {Category, CreateCategory, UpdateCategory} from '../models/categoryModel';
import {notFound} from '@hapi/boom'
import axios from 'axios';

export class CategoryService {


    async createCategory(categoryData: CreateCategory): Promise<Category>{
        const {data} = await axios.post<Category>('https://api.escuelajs.co/api/v1/categories',categoryData);
        return data;
    }

    async getCategories(): Promise<Category[]>{
        const {data} = await axios.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
        return data;
    }
//: Promise<Category | undefined>
    async getCategory(categoryId: Category['id']): Promise<Category>{
        const {data} = await axios.get<Category>(`https://api.escuelajs.co/api/v1/categories/${categoryId}`);
        if(typeof data == 'undefined'){
            throw notFound('No existe esta categoria :C')
        }
        return data;
    }

    async updateCategory(categoryId: Category['id'], categoryData: UpdateCategory):Promise<Category>{
        const {data} = await axios.put<Category>(`https://api.escuelajs.co/api/v1/categories/${categoryId}`, categoryData);
        return data;
    }
}