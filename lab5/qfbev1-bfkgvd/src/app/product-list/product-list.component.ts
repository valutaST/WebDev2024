import { Component } from '@angular/core';
import { Category, categories } from '../categories';
import { Product } from '../products';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  categories: Category[] = categories;
  selectedCategory?: Category;
  
  onSelectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  removeProduct(product: Product): void {
    // Implement logic to remove the product from the selected category
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(p => p !== product);
    }
  }

  likeProduct(product: Product): void {
    // Increment the likes for the selected product
    product.likes++;
  }

  share(product: any) {
    const message = `Check out this product: ${product.name}. Link: ${product.link}`;
  
    window.location.href = `tg://msg?text=${encodeURIComponent(message)}`;

  }


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/