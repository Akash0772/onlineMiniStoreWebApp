import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any;
addToCart: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
  }

  navigateToAddProductPage() {
    this.router.navigate(['/add-product']);
  }

  navigateToCartPage() {
    this.router.navigate(['/cart']);
  }
}
