import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  
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