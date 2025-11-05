import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // private readonly items = signal<any[]>([]);

  // cartCount = computed(() => this.items().length);


  // addToCart(product: any) {
  //   this.items.update(items => [...items, product]);
  // }

  // removeFromCart(product: any) {
  //   this.items.update(items => items.filter(item => item.id !== product.id));
  // }

  // getItems() {
  //   return this.items();
  // }

  public readonly items = signal<any[]>([]);

  public cartCount = computed(() => this.items().length);

  public addToCart(product: any) {
    this.items.update( items => [...items, product]);
  }

  public removeFromCart(product: any) {
    this.items.update(items => items.filter(item => item.id !== product.id));
  }

  public getItems() {
    return this.items();
  }
}
