import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CategoriesModule } from 'src/categories/categories.module';
import Product from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[CategoriesModule,TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
