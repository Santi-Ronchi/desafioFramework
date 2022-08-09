import { Injectable } from '@nestjs/common';
import { Products } from '../interfaces/products.interface'; 

@Injectable()
export class ProductsService {
    private readonly products: Products[] = [];
        create(products: Products) {
        this.products.push(products);
    }

    findAll(): Products[] {
    return this.products;
    }
}
