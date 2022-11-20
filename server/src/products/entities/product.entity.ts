import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Category from "../../categories/entities/category.entity";

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
    @Column({type:'numeric'})
    product_weight:number;
    @Column({type:'numeric'})
    product_volume:number;
    @Column({type:'varchar'})
    product_dimension:string;

    @ManyToOne(type => Category, category => category.category_id )
    category_id:Category;
}
export default Product;