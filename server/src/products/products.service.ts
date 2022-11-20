import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import Product from './entities/product.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>,
    private readonly categoriesService: CategoriesService
  ) { }
  async create(createProductDto: CreateProductDto) {
    // this.repo.manager.save
    // const res = await this.repo.query(`
    // INSERT INTO store.products (
    //   product_uuid,
    //   category_id,
    //   product_description,
    //   product_dimension,
    //   product_name,
    //   product_price,
    //   product_stock,
    //   product_volume,
    //   product_weight
    // ) VALUES (
    //   ${uuid()},
    //   ${createProductDto.categoryId},
    //   ${createProductDto.description},
    //   ${createProductDto.dimension},
    //   ${createProductDto.name},
    //   ${createProductDto.price},
    //   ${createProductDto.stock},
    //   ${createProductDto.volume},
    //   ${createProductDto.weight}
    // );
    // `);
    console.log(createProductDto.categoryId)
    this.categoriesService.findOne(createProductDto.categoryId).then(category => {
      console.log("category")
      console.log(category)
      if (!category ) {
        throw Error('Categoria inválida')
      }

      const product: Product = {
        product_uuid:uuid(),
        category_id: category[0],
        product_description: createProductDto.description,
        product_dimension: createProductDto.dimension,
        product_name: createProductDto.name,
        product_price: createProductDto.price,
        product_stock: createProductDto.stock,
        product_volume: createProductDto.volume,
        product_weight: createProductDto.weight
      } as Product;

      console.log(product)
      this.repo.save(product);
    }).catch(err => {
      console.error(err);
    });
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
