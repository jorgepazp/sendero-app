import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Product from "./product.entity";

@Entity({name:'categories'})
class Category {
    @PrimaryGeneratedColumn('increment')
    category_id:number;
    @Column({type:'varchar'})
    category_name:string;
    @Column({type:'varchar'})
    category_description:string;
    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    category_created_at: Date;
    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    category_modified_at: Date;
    @OneToMany(type => Product, product => product.category) products: Product[];  
}

export default Category;