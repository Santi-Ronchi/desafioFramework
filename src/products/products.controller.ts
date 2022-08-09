import { Body, Controller, Get, Post } from '@nestjs/common';
import { Products } from '../interfaces/products.interface';
import { ProductsService } from './products.service';
import { createProductsDto } from '../dto/create-product.dto';


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    async create(@Body() createProductsDto: createProductsDto) {
        this.productsService.create(createProductsDto);
    }

    @Get()
    async findAll(): Promise<Products[]> {
        return this.productsService.findAll();
    }

}
