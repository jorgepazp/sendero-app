import { Category } from "./category.interface";

export interface Product {
    uuid: string;
    name: string;
    description: string;
    features: string[];
    volume: string;
    weight: string;
    dimension: string;
    categoryId: number ;
    category:Category | null;
}
