import { Component, inject, Input, OnInit } from '@angular/core';
import { ZarthiLogo } from '../../../assets/assets';
import { ProductsService } from '../../core/services/api/products.service';
import { Product } from '../../interfaces/products-iterface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public images = {
    ZarthiLogo,
  }

  // @Input() product: any;

  constructor(private readonly cartService: CartService){}

  public productApiData !: Product[];

  private readonly productApi = inject(ProductsService);

   public products: any[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.productApi.getProducts().subscribe({
      next: (res) => {
        this.productApiData = res.map((item: Product) => ({
          image: item.image,
          category: item.category,
          title: item.title,
          price: item.price,
          description: item.description,
          id: item.id,
          rating: {
            rate: item.rating.rate,
            count: item.rating.count
          }
        }));
      },
      error: (err) => {
        console.error('Failed to fetch products:', err);
      }
    });
  }

  public cartDetail: boolean[] = [];

  // public addToCart(index: number) {
  //   this.cartDetail[index] = !this.cartDetail[index];
  //   this.cartService.addToCart(this.product);
  // }

//   public addToCart(index: number) {
//   this.cartDetail[index] = !this.cartDetail[index];

//   // const product = this.productApiData[index];

//   // if (this.cartDetail[index]) {
//   //   this.cartService.addToCart(product);
//   // } else {
//   //   this.cartService.removeFromCart(product);
//   // }
// }

  public addToCart(index: number) {
    this.cartDetail[index] = !this.cartDetail[index];

    const product = this.productApiData[index];

    if(this.cartDetail[index]) {
      this.cartService.addToCart(product);
    } else {
      this.cartService.removeFromCart(product);
    }
  }
}

