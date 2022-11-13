// import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
// import { BaseEntityType } from "./base.type";

// export abstract class BaseEntity implements BaseEntityType {
//     @PrimaryGeneratedColumn('uuid')
//     product_uuid: string;

//     @Column({ type: 'boolean', default: true })
//     isActive: boolean;

//     @Column({ type: 'boolean', default: false })
//     isArchived: boolean;

//     @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
//     createDateTime: Date;

//     @Column({ type: 'varchar', length: 300 })
//     createdBy: string;

//     @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
//     lastChangedDateTime: Date;

//     @Column({ type: 'varchar', length: 300 })
//     lastChangedBy: string;

//     @Column({ type: 'varchar', length: 300, nullable: true })
//     internalComment: string | null;
// }