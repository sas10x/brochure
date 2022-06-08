import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  images: string[];
  description: string = "<p>Davco Dustless Tile Adhesive<br />\nHD 25kg</p>\n";
  products: any[];
  id: number

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.getProduct(this.id);
  }

  getProduct(article: number) {
    this.productService.getProductbySku(article).subscribe(
      x => {
        this.products = x; console.log(x);
        this.images = [...this.products[0].images];
        this.images.shift();
      }
    )
  }

  searchProduct() {
    
  }
}
