import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];
  private productsService: ProductService;

  constructor(productsService: ProductService) {
    productsService.getProducts().subscribe(
      (data: Product[]) => { this.products = data }
    );
  }

  ngOnInit() {
  }

  onClickedButton(event: MouseEvent, productId: number) {

    const grabOne: Product = this.products.find(object => object.id === productId);
    grabOne.inventory = grabOne.inventory - 1;

  }
}
