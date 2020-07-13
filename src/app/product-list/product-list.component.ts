import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";


@Component({
  selector: 'app-product.list',
  templateUrl: './product.list.component.html',
  styleUrls: ['./product.list.component.css']
})
export class ProductListComponent implements OnInit {
  private querySub: Promise<PushSubscription>;
  private route: any;

  constructor() {
  }

  page: any;
  private querySub: Subscription;

  ngOnInit() {
    this.querySub = this.route.queryParams.subscribe(() => {
      this.update();
    });
  }

  update() {
    if (this.route.snapshot.queryParamMap.get('page')) {
      const currentPage = +this.route.snapshot.queryParamMap.get('page');
      const size = +this.route.snapshot.queryParamMap.get('size');
      this.getProds(currentPage, size);
    } else {
      this.getProds();
    }
  }


  getProds(page: any, size: any) {

    var size;
    this.productService.getAllInPage(+page, +size)
      .subscribe(page => {
        this.page = page;
      });

  }


}






