import { Component, computed, inject } from '@angular/core';
import { DeleteLogo } from '../../../assets/assets';
import { CartService } from '../../services/cart.service';
import { computeMsgId } from '@angular/compiler';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  public images = {
    DeleteLogo
  };

  public readonly cartService = inject(CartService);

  public cartItems = this.cartService.items;

  public itemCount = computed(() => this.cartItems().length);
  public totalAmount = computed(() =>
    this.cartItems().reduce((sum, item) => Math.round(sum + item.price), 0)
  );

  public removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }
}
