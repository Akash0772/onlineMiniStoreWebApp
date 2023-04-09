import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems!: any[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.productService.getCartItems();
  }

  removeFromCart(item: any) {
    this.productService.removeFromCart(item);
    this.cartItems = this.productService.getCartItems();
  }

  increaseQuantity(item: { quantity: any; totalPrice: any; price: any; }) {
    item.quantity++;
    item.totalPrice = item.quantity * item.price;
    this.productService.updateCartItem(item);
  }

  decreaseQuantity(item: { quantity: any; totalPrice: any; price: any; }) {
    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      this.productService.updateCartItem(item);
    }
  }
}


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent {
//   products: any;

//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.products = JSON.parse(localStorage.getItem('cart') || '[]');
//   }

//   navigateToProductPage() {
//     this.router.navigate(['/products']);
//   }
// }
