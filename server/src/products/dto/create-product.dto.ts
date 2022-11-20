import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    categoryId:number;
    @ApiProperty()
    name:string;
    @ApiProperty()
    description:string;
    @ApiProperty()
    dimension:string;
    @ApiProperty()
    weight:number;
    @ApiProperty()
    volume:number;
    @ApiProperty()
    price:number;
    @ApiProperty()
    stock:number;
}
