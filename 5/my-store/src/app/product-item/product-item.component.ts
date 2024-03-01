import { Component, Input } from '@angular/core';
import { Product } from '../categories';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  // Implement methods for liking and removing a product
}
