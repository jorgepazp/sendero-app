import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ModelDataSource from 'src/model/model.datasource';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import Category from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private readonly repo: Repository<Category>){}
  create(createCategoryDto: CreateCategoryDto) {
    return this.repo.insert(createCategoryDto as unknown as Category)
  }

  findAll() {
    return this.repo.find()
  }

  findOne(id: number):Promise<Category[]> {
    // this.repo.query(`SELECT * FROM "categories" WHERE category_id = ${id}`).then(x=>{
    //   console.log(x);
    // });
    return this.repo.query(`SELECT * FROM store.categories WHERE category_id = ${id}`);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return ModelDataSource.
      createQueryBuilder().
      update(Category).
      set({category_name:updateCategoryDto.name,category_description:updateCategoryDto.description}).
      where("id = :id",{id}).
      execute();
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
