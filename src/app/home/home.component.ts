import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    let params = {};
    this.productService.getProducts(params).subscribe(x => console.log(x))
  }

}
