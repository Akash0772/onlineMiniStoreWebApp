import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productName = '';
  productPrice= 0;

  constructor(private router: Router) {}

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
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-product',
//   templateUrl: './add-product.component.html',
//   styleUrls: ['./add-product.component.css']
// })
// export class AddProductComponent {
//   productName!: String;
//   productPrice!: String;

//   onSubmit() {
//     const products = JSON.parse(localStorage.getItem('products') || '[]');
//     const newProduct = {
//       name: this.productName,
//       price: this.productPrice
//     };
//     products.push(newProduct);
//     localStorage.setItem('products', JSON.stringify(products));
//     this.productName = '';
//     this.productPrice = 'null';
//   }
// }

