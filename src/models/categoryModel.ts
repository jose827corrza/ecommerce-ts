import {BaseModel} from './baseModel';

export interface Category extends BaseModel {
    name: string;
    image: string;
}

export interface CreateCategory extends  Omit<Category, 'id'>{}

export interface UpdateCategory extends Partial<CreateCategory>{}