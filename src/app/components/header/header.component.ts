import { Component } from '@angular/core';
import { CartLogo, logo, ZarthiLogo } from '../../../assets/assets';
import { CartService } from '../../services/cart.service';
import { routes } from '../../app.routes';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public images = {
    ZarthiLogo,
    CartLogo,
    logo
  }

  constructor(public cartService: CartService, private readonly router: Router) {}


}
