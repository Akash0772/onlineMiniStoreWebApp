import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productName= '';
  productPrice = 0;

  constructor(private authService: AuthService, private router: Router) {}

  addProduct() {
    let product = {
      productName: this.productName,
      productPrice: this.productPrice
    };

    let products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
  }

  navigateToProductPage() {
    this.router.navigate(['/products']);
  }

  navigateToCartPage() {
    this.router.navigate(['/cart']);
  }

  logout() {
    this.authService.logout();
  }
}


