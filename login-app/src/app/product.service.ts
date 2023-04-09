// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   id: any;
//   updateCartItem(item: { quantity: number; totalPrice: number; price: number; }) {
//     throw new Error('Method not implemented.');
//   }
//   removeFromCart: any;
//   getCartItems(): never[] {
//     throw new Error('Method not implemented.');
//   }

//   constructor(private http: HttpClient) { }

//   // methods for HTTP requests will be added here
//   getAllProducts() {
//     return this.http.get('https://your-api-url/products');
//   }

//   addProduct(product: ProductService) {
//     return this.http.post('https://your-api-url/products', product);
//   }
  
//   updateProduct(product: ProductService) {
//     return this.http.put(`https://your-api-url/products/${product.id}`, product);
//   }
  
//   deleteProduct(productId: number) {
//     return this.http.delete(`https://your-api-url/products/${productId}`);
//   }
  
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cart: Product[] = [];

  // removeFromCart(item: any) {
  //   throw new Error('Method not implemented.');
  // }
  updateCartItem(item: { quantity: any; totalPrice: any; price: any; }) {
    throw new Error('Method not implemented.');
  }
  private products: Product[] = [];
  private cartItems: Product[] = [];
  private productsSubject = new BehaviorSubject<Product[]>([]);
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.productsSubject.next(this.products);
    this.cartItemsSubject.next(this.cartItems);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  addProductToCart(product: Product): void {
    this.cartItems.push(product);
    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  getProductsSubject(): BehaviorSubject<Product[]> {
    return this.productsSubject;
  }

  getCartItemsSubject(): BehaviorSubject<Product[]> {
    return this.cartItemsSubject;
  }

  addProduct(product: Product): void {
    this.products.push(product);
    this.productsSubject.next(this.products);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  retrieveProducts(): void {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    this.products = storedProducts;
    this.productsSubject.next(this.products);
  }

  ddToCart(product: Product) {
    this.cart.push(product);
  }

  removeFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  getCart(): Product[] {
    return this.cart;
  }
}

export interface Product {
addedToCart: any;
  id: number;
  name: string;
  price: number;
}
