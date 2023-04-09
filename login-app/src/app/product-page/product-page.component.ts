import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  // ngOnInit() {
  //   // fetch products from local storage
  //   const productsJson = localStorage.getItem('products');
  //   if (productsJson) {
  //     this.products = JSON.parse(productsJson);
  //   } else {
  //     this.products = [];
  //   }
  // }

  // addToCart(product: { addedToCart: boolean; }) {
  //   product.addedToCart = true;
  //   // save updated product list to local storage
  //   localStorage.setItem('products', JSON.stringify(this.products));
  // }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  addToCart(product: Product): void {
    // this.productService.addProductToCart(product);
    product.addedToCart = true;
    this.productService.addProductToCart(product);
  }
}
