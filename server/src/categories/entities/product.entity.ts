import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Category from "./category.entity";

@Entity({name:'products'})
class Product {
    @PrimaryGeneratedColumn('uuid')
    product_uuid: string;
    @Column({type:'integer'})
    product_price:number;
    @Column({type:'integer'})
    product_stock:number;
    @Column({type:'varchar'})
    product_name:string;
    @Column({type:'varchar'})
    product_description:string;
    @ManyToOne(type => Category, category => category.category_id ) category:Category;
}
export default Product;